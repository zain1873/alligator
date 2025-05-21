import Link from "next/link"
import Image from "next/image"
import { Users, Award, Briefcase, Heart, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Our mission is to make work easier
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    We're building tools to help teams collaborate, communicate, and get more done together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/features">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Explore our features
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Contact us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">From frustration to innovation</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  DoItAlligator was born out of frustration with existing task management tools. In 2020, our founders
                  were working on a complex project and struggling to keep track of tasks, deadlines, and team
                  communication across multiple platforms.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  They envisioned a single platform where teams could manage tasks, communicate, and collaborate
                  seamlessly. After months of development and testing with early users, DoItAlligator was launched in
                  2021.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Today, thousands of teams around the world use DoItAlligator to organize their work and boost
                  productivity. We're constantly improving our platform based on user feedback and industry best
                  practices.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-lg dark:bg-green-800"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-lg dark:bg-green-800"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our founders"
                  width={600}
                  height={400}
                  className="relative rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800 mb-4">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">What drives us</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Our core values guide everything we do, from product development to customer support.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-800 mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We prioritize our customers' needs in every decision we make. Your success is our success.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-800 mb-4">
                  <Zap className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're never satisfied with the status quo. We're always looking for ways to improve our product and
                  ourselves.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-800 mb-4">
                  <Heart className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're passionate about helping teams work better together. This passion drives our innovation and
                  dedication.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-800 mb-4">
                  <Award className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We strive for excellence in everything we do, from code quality to customer support.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-800 mb-4">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diversity & Inclusion</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe diverse teams build better products. We're committed to creating an inclusive environment
                  for all.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-800 mb-4">
                  <Briefcase className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're honest, transparent, and ethical in all our business practices. We do what we say we'll do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800 mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Meet the people behind DoItAlligator</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                We're a diverse team of designers, developers, and product specialists passionate about building great
                software.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Co-Founder & CEO</p>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  Former product manager with 10+ years of experience in SaaS. Passionate about building tools that make
                  work easier.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Michael Brown" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Michael Brown</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Co-Founder & CTO</p>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  Full-stack developer with a background in enterprise software. Loves solving complex technical
                  challenges.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Emily Davis" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Emily Davis</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Head of Design</p>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  UX/UI designer focused on creating intuitive and delightful user experiences. Advocate for
                  accessibility.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="David Wilson" />
                  <AvatarFallback>DW</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">David Wilson</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Head of Engineering</p>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  Backend specialist with expertise in scalable architecture. Previously led engineering teams at
                  startups and enterprises.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Jessica Lee" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Jessica Lee</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Head of Customer Success</p>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  Customer-focused leader dedicated to helping teams get the most out of DoItAlligator. Expert in user
                  onboarding and training.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Robert Chen" />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Robert Chen</h3>
                <p className="text-green-600 dark:text-green-400\
