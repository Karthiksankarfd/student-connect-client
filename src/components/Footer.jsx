import React from 'react'
import { Link } from 'react-router-dom'

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
                    <li><Link class="text-sm hover:underline">Home</Link></li>
                    <li><Link class="text-sm hover:underline">Features</Link></li>
                    <li><Link class="text-sm hover:underline">Contact</Link></li>
                </ul>
                </div>
                <div>
                <h3 class="text-lg font-bold mb-4">Support</h3>
                <ul>
                    <li><Link class="text-sm hover:underline">FAQs</Link></li>
                    <li><Link class="text-sm hover:underline">Privacy Policy</Link></li>
                    <li><Link class="text-sm hover:underline">Terms of Service</Link></li>
                </ul>
                </div>
                <div>
                <h3 class="text-lg font-bold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                    <Link class="text-sm hover:underline">Twitter</Link>
                    <Link class="text-sm hover:underline">Instagram</Link>
                    <Link class="text-sm hover:underline">LinkedIn</Link>
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
