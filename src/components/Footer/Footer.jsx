import React from "react";
import { Separator } from "@/components/ui/separator";
import { Copyright } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function Footer() {
  return (
    <>
      <div className=" lg:py-10 px-5 lg:px-14 w-full border-t border-gray-200 shadow-sm overflow-hidden">
  {/* First Row */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-58 overflow-hidden">
          {/* Link List's */}
          <div className="hidden lg:grid grid-cols-3 w-[10]">
            <ul className="flex flex-col gap-2">
              <li className="text-md font-bold text-black pb-2">HELP</li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                FAQ
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Delivery Information
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Returns Policy
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Make A Return
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Orders
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Submit A Fake
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="text-md font-bold text-black pb-2">MY ACCOUNT</li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Login
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Register
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="text-md font-bold text-black pb-2">PAGES</li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Gymshark Central
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Gymshark Loyalty
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Careers
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                About Us
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Student Discount
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Training App
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Factory List
              </li>
            </ul>
          </div>
          {/* SS List */}
          <div className="block lg:hidden">
            <Accordion type="single" collapsible className="w-full text-md font-bold text-black pb-7">
              <AccordionItem
                key='HELP'
                value="HELP"
              >
                <AccordionTrigger>HELP</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2">
                    <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                      FAQ
                    </li>
                    <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                      Delivery Information
                    </li>
                    <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                      Returns Policy
                    </li>
                    <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                      Make A Return
                    </li>
                    <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                      Orders
                    </li>
                    <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                      Submit A Fake
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                key='MY ACCOUNT'
                value="MY ACCOUNT"
              >
                <AccordionTrigger>MY ACCOUNT</AccordionTrigger>
                <AccordionContent>
                 <ul className="flex flex-col gap-2">
              
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Login
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Register
              </li>
            </ul>
                </AccordionContent>
              </AccordionItem>

               <AccordionItem
                key='PAGES'
                value="PAGES"
              >
                <AccordionTrigger>PAGES</AccordionTrigger>
                <AccordionContent>
                             <ul className="flex flex-col gap-2">
              
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Gymshark Central
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Gymshark Loyalty
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Careers
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                About Us
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Student Discount
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Training App
              </li>
              <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
                Factory List
              </li>
            </ul>
                </AccordionContent>
              </AccordionItem>


            </Accordion>
          </div>

          {/* More About GymShark */}
          <div className="flex flex-col gap-2 lg:pr-12">
            <h1 className="font-bold text-md pb-2">MORE ABOUT GYMSHARK</h1>
            <div className="hidden lg:flex gap-2">
              <div className="w-1/2 hover:opacity-80 cursor-pointer">
                <img
                  className="w-43"
                  src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4QtcnsrjM61MBOfKzadnle%2F71b2f410cc0b750b70fd93a1866e1b5c%2Fblog-footer.jpg&w=1920&q=80"
                  alt="Blog"
                />
                <div className="w-43 h-12 bg-gray-200 p-1 px-3">
                  <p className="font-semibold text-[13px]">BLOG</p>
                </div>
              </div>

              <div className="w-1/2 hover:opacity-80 cursor-pointer">
                <img
                  className="w-43"
                  src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3PKQBuoomlHFd10tV2xhCY%2F2de6be180d73c666374009c7a1065be4%2F1_Students.jpg&w=1920&q=80"
                  alt="STUDENT_DISCOUNT"
                />
                <div className="w-43 h-12 bg-gray-200 p-1 px-3">
                  <p className="font-semibold text-[13px]">
                    15% STUDENT DISCOUNT
                  </p>
                </div>
              </div>

              <div className="w-1/2 hover:opacity-80 cursor-pointer">
                <img
                  className="w-43"
                  src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F78i6cwhCg8cVO59Dvlk7Gy%2F0f941cc6bb840d0556fca0913b884674%2FNewsletter.jpg&w=1920&q=80"
                  alt="Sigup_Email"
                />
                <div className="w-43 h-12 bg-gray-200 p-1 px-3">
                  <p className="font-semibold text-[13px]">EMAIL SIGNUP</p>
                </div>
              </div>
            </div>
            {/* SS Crousel */}
            <div className="lg:hidden w-full">
              
              <Carousel
                opts={{ align: "start" }}
                className="w-full overflow-hidden"
              >
                <CarouselContent >
                  <CarouselItem
                    key={"blog"}
                    className="basis-1/2 md:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                        {/* Product Image */}
                        <div className=" w-full  overflow-hidden">
                          <div className="w-full hover:opacity-80 cursor-pointer">
                            <img
                              className="w-60"
                              src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4QtcnsrjM61MBOfKzadnle%2F71b2f410cc0b750b70fd93a1866e1b5c%2Fblog-footer.jpg&w=1920&q=80"
                              alt="Blog"
                            />
                            <div className="w-60 h-12 bg-gray-200 p-1 px-3">
                              <p className="font-semibold text-[13px]">BLOG</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem
                    key={"discount"}
                    className="basis-1/2 md:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                        {/* Product Image */}
                        <div className=" w-full  overflow-hidden">
                          <div className="w-full hover:opacity-80 cursor-pointer">
                            <img
                              className="w-60"
                              src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3PKQBuoomlHFd10tV2xhCY%2F2de6be180d73c666374009c7a1065be4%2F1_Students.jpg&w=1920&q=80"
                              alt="STUDENT_DISCOUNT"
                            />
                            <div className="w-60 h-12 bg-gray-200 p-1 px-3">
                              <p className="font-semibold text-[13px]">
                                15% STUDENT DISCOUNT
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem
                    key={"email"}
                    className="basis-1/2 md:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                        {/* Product Image */}
                        <div className=" w-full  overflow-hidden">
                          <div className="w-full hover:opacity-80 cursor-pointer">
                            <img
                              className="w-60"
                              src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F78i6cwhCg8cVO59Dvlk7Gy%2F0f941cc6bb840d0556fca0913b884674%2FNewsletter.jpg&w=1920&q=80"
                              alt="Sigup_Email"
                            />
                            <div className="w-60 h-12 bg-gray-200 p-1 px-3">
                              <p className="font-semibold text-[13px]">
                                EMAIL SIGNUP
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>

            </div>
          </div>
        </div>

  {/* Second Row */}
        <div className="lg:flex lg:justify-between w-full lg:mt-15 mt-7">

          <div className="hidden lg:flex justify-center items-center gap-2">
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5PrfyA9tb7E5sX4VJOvUXU/5c7d1da15bcb3ea9bc846698b14da4c0/visa-card.svg"
              alt="visa_card"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/LwfpWwq8TXIansB91xPmD/d20403df94193ad356b8ea0a2df4e9f1/mastercard-card.svg"
              alt="mastercard"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/7shmU9DfzLDbUk4b6obKoX/d3dd37478163f60363dc9c982b6fd56e/amex-card.svg"
              alt="americanexpress"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/30jtAlNtcunM6pu0L8Xar/f528a13df611d9585b73a36fe35b8797/paypal-card.svg"
              alt="paypal"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5AUy4FwF2qwCL5Xog760Xf/1839c30ce2dbe6b7119f4dab3f15920b/applepay-card.svg"
              alt="applepay"
            />
          </div>

          <div className="flex justify-center items-center gap-3 mb-5 lg:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="lg:w-6 lg:h-6 w-5 h-5 hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="lg:w-6 lg:h-6 w-5 h-5 hover:text-pink-500 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="lg:w-5 lg:h-5 w-4 h-4 hover:text-[#FE2C55] transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="lg:w-6 lg:h-6 w-5 h-5 hover:text-sky-500 transition-colors" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="lg:w-6 lg:h-6 w-5 h-5 hover:text-red-500 transition-colors" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="lg:w-6 lg:h-6 w-5 h-5 hover:text-indigo-500 transition-colors" />
            </a>
            <a
              href="https://twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="lg:w-6 lg:h-6 w-5 h-5 hover:text-red-500 transition-colors" />
            </a>
          </div>

          <div className="lg:hidden flex flex-col gap-3 justify-center items-center">
          <ul className="flex flex-col justify-center items-center gap-3 text-sm">
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms and Conditions
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms of Use
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Privacy Notice
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Cookie Policy
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Modern Slavery
            </li>
          </ul>
          <div className="flex gap-2 justify-center items-center">
            <a
              href="https://twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiWorld className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <p className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
              ROW
            </p>
          </div>
        </div>

        <div className="lg:hidden flex justify-center items-center gap-2 py-7">
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5PrfyA9tb7E5sX4VJOvUXU/5c7d1da15bcb3ea9bc846698b14da4c0/visa-card.svg"
              alt="visa_card"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/LwfpWwq8TXIansB91xPmD/d20403df94193ad356b8ea0a2df4e9f1/mastercard-card.svg"
              alt="mastercard"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/7shmU9DfzLDbUk4b6obKoX/d3dd37478163f60363dc9c982b6fd56e/amex-card.svg"
              alt="americanexpress"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/30jtAlNtcunM6pu0L8Xar/f528a13df611d9585b73a36fe35b8797/paypal-card.svg"
              alt="paypal"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5AUy4FwF2qwCL5Xog760Xf/1839c30ce2dbe6b7119f4dab3f15920b/applepay-card.svg"
              alt="applepay"
            />
          </div>

        </div>
      </div>

  {/* Third Row */}
      <div className="flex justify-center lg:justify-between py-5 px-5 lg:px-14 w-full overflow-hidden">
        <div className="flex justify-center items-center gap-1">
          <Copyright className="w-3 font-light pt-0.5" />
          <span className="text-sm text-black">
            2025 | Gymshark Limited | All Rights Reserved. | We Do Gym.
          </span>
        </div>

        <div className="hidden lg:flex gap-3 justify-center items-center">
          <ul className="flex justify-center items-center gap-3 text-sm">
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms and Conditions
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms of Use
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Privacy Notice
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Cookie Policy
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Modern Slavery
            </li>
          </ul>
          <div className="border-l-2 h-5 border-gray-400 "></div>{" "}
          {/* Vertical Line */}
          <div className="flex gap-2 justify-center items-center">
            <a
              href="https://twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiWorld className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <p className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
              ROW
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Footer;
