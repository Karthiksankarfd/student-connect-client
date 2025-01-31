import React from 'react'

const Footer = () => {
  return (
            <footer class="bg-white text-black dark:bg-black dark:text-white px-6 py-8">
            <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                <h3 class="text-lg font-bold mb-4">About Us</h3>
                <p class="text-sm">We are a platform that connects people with innovative ideas to solve real-world problems.</p>
                </div>
                <div>
                <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                <ul>
                    <li><a href="#" class="text-sm hover:underline">Home</a></li>
                    <li><a href="#" class="text-sm hover:underline">Features</a></li>
                    <li><a href="#" class="text-sm hover:underline">Contact</a></li>
                </ul>
                </div>
                <div>
                <h3 class="text-lg font-bold mb-4">Support</h3>
                <ul>
                    <li><a href="#" class="text-sm hover:underline">FAQs</a></li>
                    <li><a href="#" class="text-sm hover:underline">Privacy Policy</a></li>
                    <li><a href="#" class="text-sm hover:underline">Terms of Service</a></li>
                </ul>
                </div>
                <div>
                <h3 class="text-lg font-bold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                    <a href="#" class="text-sm hover:underline">Twitter</a>
                    <a href="#" class="text-sm hover:underline">Instagram</a>
                    <a href="#" class="text-sm hover:underline">LinkedIn</a>
                </div>
                </div>
            </div>
            <div class="text-center mt-8 text-sm">
                © 2025 Student Connect. All rights reserved.
            </div>
            </footer>

  )
}

export default Footer
