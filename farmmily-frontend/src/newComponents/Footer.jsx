import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-6 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="md:col-span-1">
              <h3 class="text-2xl font-extrabold">
                Farmmily<span class="text-green-500">.</span>
              </h3>
              <p class="text-gray-400 mt-2">
                Engineering Agricultural Prosperity.
              </p>
            </div>
            <div>
              <h3 class="font-semibold mb-4">Navigate</h3>
              <ul>
                <li class="mb-2">
                  <a href="index.html" class="hover:text-green-400">
                    Home
                  </a>
                </li>
                <li class="mb-2">
                  <a href="about.html" class="hover:text-green-400">
                    About Us
                  </a>
                </li>
                <li class="mb-2">
                  <a href="services.html" class="hover:text-green-400">
                    Services
                  </a>
                </li>
                <li class="mb-2">
                  <a href="portfolio.html" class="hover:text-green-400">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-4">Corporate Office</h3>
              <p class="text-gray-400">
                57, CK Colony, New Siddhapudur, Coimbatore-641044
              </p>
            </div>
            <div>
              <h3 class="font-semibold mb-4">Contact</h3>
              <p class="text-gray-400">+91 77088 47977</p>
              <p class="text-gray-400">contact@farmmily.com</p>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>
              &copy; 2024 Farmmily Agro Infra Developers Pvt Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
