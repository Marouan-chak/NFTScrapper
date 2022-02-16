const puppeteer = require("puppeteer");
const fs = require("fs");
const express = require("express");
let followers_list = {};
//Function to transform number from K to 1000
function formatNumber(followers) {
  const lastChar = followers.charAt(followers.length - 1);
  if (lastChar === "K") {
    // removing the K, replacing ',' with '.' parse to float then x1000
    var n_followers =
      parseFloat(
        followers.substring(0, followers.length - 1).replace(",", ".")
      ) * 1000;
  } else if (followers.length > 3) {
    //if number format is like 6,969
    var n_followers = parseFloat(followers.replace(",", ".")) * 1000;
  } else {
    var n_followers = parseFloat(followers.replace(",", "."));
  }
  return n_followers;
}

async function main() {
  const app = express();
  const port = 3000;
  //const browser = await puppeteer.launch({headless: false});

  app.get("/projects", async (req, res) => {
    try {
          

          const browser = await puppeteer.launch({
            headless: true,
            args: [
              "--disable-gpu",
              "--disable-dev-shm-usage",
              "--disable-setuid-sandbox",
              "--no-sandbox",
            ],
          });
          const page = await browser.newPage();
          console.log("New page created");
          await page.goto("https://rarity.tools/upcoming/", {
            waitUntil: "networkidle0",
          }); // wait until page load
          //find all anchor with href container twitter
          var hrefs = await page.$$eval('a[href*="twitter"]', (as) =>
            as.map((a) => a.href)
          );
          hrefs =hrefs.filter(e => e !== 'https://twitter.com/raritytools')
          followers_list = new Array(hrefs.length);
          //Get the number of followers of each project
          for (let index = 0; index < hrefs.length; index++) {
            await page.goto(hrefs[index]);

            try {
              //wait for span to load
              await page.waitForSelector('a[href*="followers"] > span > span', {
                timeout: 1500,
              });
              //Getting the span containing the number of followers
              let followersSpan = await page.$(
                'a[href*="followers"] > span > span'
              );
              //getting the text content of span and store it in followers
              let followers = await page.evaluate(
                (el) => el.textContent,
                followersSpan
              );
              followers_list[index] = formatNumber(followers);
              console.log(index);
              await page.waitForTimeout(200);
            } catch (e) {
              if (e instanceof puppeteer.errors.TimeoutError) {
                followers_list[index] = 0;
                console.log(index);
                await page.waitForTimeout(200);
              }
            }
          }

          var followers_dict = new Array(hrefs.length);
          function setJSON(href, i) {
            var obj = {};
            obj["id"] = i;
            obj["twitter"] = href;
            obj["tfollowers"] = followers_list[i];
            followers_dict[i] = obj;
          }

          hrefs.forEach(setJSON);

          const sorted = followers_dict.sort((a, b) =>
            a.tfollowers > b.tfollowers ? -1 : 1
          );

          let interesting = {};
          for (let i = 0; i < sorted.length; i++) {
            if (sorted[i]["tfollowers"] < 15000) {
              break;
            } else {
              interesting[i] = sorted[i];
            }
          }
          var data = JSON.stringify(sorted);
          fs.writeFile("/home/pptruser/projects/projects.json", data, function (err) {
            if (err) throw err;
            console.log("complete");
          });
          res.json(interesting);
          await browser.close();

          
      
    } catch (error) {
      console.error(error);
      res.send("Something went wrong!!!");
    }
  });

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
}

main();
