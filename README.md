<div id="top"></div>
<!--
This template is inspired from https://github.com/othneildrew/Best-README-Template , Go check it .
-->




[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Marouan-chak/NFTScrapper">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">NFT projects' scrapper</h3>

  <p align="center">
    A simple NFT project scrapper for upcoming listing from Raritytools!
    <br />
    
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-Overview">Project Overview</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


Rarity.tools is a great website for watching upcoming NFT projects. But lately I faced a problem due to the big number of listed projects and the lacking of any way of sorting these projects, so I created this scrapper in order to sort all the listed projects by Twitter followers so I can in some way see only the interesting collections.

> Disclaimer: Any information provided on this page including the featured project(s) should not be considered as financial or investment advice. The information is provided as-is with no guarantees. We cannot validate the claims or the trustworthiness of the projects listed.



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Puppeteer](https://pptr.dev/)
* [Golang](https://go.dev/doc/)
* [gorilla/mux](https://github.com/gorilla/mux)
* [Docker/Docker-compose](https://docs.docker.com/get-started/)
* [Traefik](https://doc.traefik.io/traefik/)
* [Express](https://expressjs.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In order to get started, you need to configure the following prequisites 

### Prerequisites

* Tested on linux (Ubuntu 20.04)
* [Docker](https://docs.docker.com/engine/install/ubuntu/)
* [traefik](https://doc.traefik.io/traefik/) [Optional] for setting up TLS

### Installation



1. Clone the repo
   ```sh
   git clone https://github.com/Marouan-chak/NFTScrapper.git
   ```
2. [Optional] Configure _docker-compose-tls.yml_ to point to your current Traefik instance and domain.

3. Run the docker stack:
   ```bash
   docker-compose  up -d --build --force-recreate
   ```
   for Traefik setup:
   ```bash
   docker-compose -f docker-compose-tls.yml up  -d --build --force-recreate
   ``` 
4. Acces the web interface on 
    ```
    http://<IP>:8000
    or
    https://<YOUR-DOMAIN>/ if you setup Traefik as LB
    ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Project-Overview -->
## Project Overview
The following picture describe the different components of the projects and the differents requests between them:

![Different components of the scrapper](/images/Architecture.jpg)
<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Marouan CHAKRAN - [marouan-chakran](https://www.linkedin.com/in/marouan-chakran/) - marouane.chakran@gmail.com

Project Link: [https://github.com/Marouan-chak/NFTScrapper](https://github.com/Marouan-chak/NFTScrapper)

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Marouan-chak/NFTScrapper/blob/main/LICENSE.txt 
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/marouan-chakran/
