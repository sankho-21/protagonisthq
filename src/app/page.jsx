import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckSquare, DollarSign, GraduationCap, Instagram, Star, Video, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'


import templates from '@/data/all-templates.json'
import AddonHoverCard from "@/components/addon-hover-card"

export default function NotionTemplateLanding() {

  return (
    <div className="flex items-center justify-center">
      <div className="min-h-screen max-w-7xl bg-background">

        <header className="border-b">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            {/* <Link href="/" className="text-2xl font-bold">NotionTemplates</Link> */}
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={'/small-logo.svg'}
                width={80}
                height={80}
                className="h-12 w-12 md:h-14 md:w-14 rounded-md"
                alt='protag logo'
              />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><Link href="#templates" className="text-muted-foreground hover:text-foreground">Templates</Link></li>
                <li><Link href="#reviews" className="text-muted-foreground hover:text-foreground">Reviews</Link></li>
                <li><Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className='md:hidden'>
                  <Menu className='w-6 h-6' />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  {/* <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription> */}
                </SheetHeader>

                <nav className="ml-auto flex flex-col space-y-5">
                  <SheetClose asChild>
                    <Link href="#services" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#offers" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                      Offers
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#testimonials" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                      Testimonials
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#faq" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                      FAQ
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#contact" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                      Contact
                    </Link>
                  </SheetClose>
                </nav>
                {/* <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                </SheetClose>
            </SheetFooter> */}
              </SheetContent>
            </Sheet >
          </div>
        </header>

        <main>

          <section className="bg-muted">
            <div className="container mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-center pt-8">
                Become the Main Character of Your Life
              </h1>
              <p className="text-lg text-muted-foreground text-center pt-4 mb-6">
                Welcome to Protagonist Syndrome.
              </p>
              <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative p-2 flex items-center">
                  <Image
                    src={"https://rowan-donut-ffc.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F170a0660-4ab7-4462-a6bc-d2ab83238013%2Fda856a28-9d2b-4e3f-aaea-f93f6768988c%2Fprotagonist_blueprint_thumb.webp?table=block&id=1231975d-b166-8082-b884-c4494c1df13a&spaceId=170a0660-4ab7-4462-a6bc-d2ab83238013&width=1420&userId=&cache=v2"}
                    alt="Notion Template Preview"
                    width={1380}
                    height={720}
                    className="aspect-video object-contain rounded-md w-full h-fit"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="mb-2 self-start">Special Offer</Badge>
                  <h2 className="text-2xl md:text-4xl md:leading-[3rem] font-bold mb-4">
                    <span className="block">The Ultimate Notion Template to</span>
                    <span className="bg-green-300 py-1 px-1">Run Your Like Like a PRO</span>
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">
                    Become the main hero of your story in 180 days.
                  </p>
                  <p className="text-base text-muted-foreground mb-6">
                    Protagonist Blueprint also includes (
                    <span className="mx-1 text-green-600 hover:cursor-pointer">
                      <AddonHoverCard>Academic Weapon</AddonHoverCard>
                    </span>
                    +
                    <span className="mx-1 text-green-600 hover:cursor-pointer">
                      <AddonHoverCard>Content brain</AddonHoverCard>
                    </span>
                    ) templates worth of ₹1,100/- for free!
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-primary">₹849</span>
                    <span className="text-sm text-muted-foreground line-through">₹1,950</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="w-full sm:w-auto">
                      Buy Now
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              {/* <h2 className="text-3xl font-bold text-center mb-8">
              Your Journey to Success with Notion Templates
            </h2> */}
              <div className="flex flex-col items-center gap-8">
                <div className="w-full max-w-4xl">
                  <Image
                    src={"https://rowan-donut-ffc.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F170a0660-4ab7-4462-a6bc-d2ab83238013%2Fe3796402-4146-4c2a-9ca0-19de0c6217c6%2FScreenshot_2024-10-18_at_9.08.09_AM.png?table=block&id=1231975d-b166-8032-b472-dddf9c7ea40e&spaceId=170a0660-4ab7-4462-a6bc-d2ab83238013&width=1420&userId=&cache=v2"}
                    alt="Creator Journey"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="w-full max-w-3xl space-y-14">

                  <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                    <div className="flex flex-col text-center items-center">
                      <Youtube className="h-8 w-8 md:w-12 md:h-12 text-red-600 mb-2" />
                      <span className="text-lg md:text-2xl font-bold">176K+</span>
                      <span className="text-xs md:text-sm text-muted-foreground">YouTube Followers</span>
                    </div>
                    <div className="flex flex-col text-center items-center">
                      <Instagram className="h-8 w-8 md:w-12 md:h-12 text-pink-600 mb-2" />
                      <span className="text-lg md:text-2xl font-bold">29K+</span>
                      <span className="text-xs md:text-sm text-muted-foreground">Instagram Followers</span>
                    </div>
                    <div className="flex flex-col text-center items-center">
                      <GraduationCap className="h-8 w-8 md:w-12 md:h-12 text-blue-600 mb-2" />
                      <span className="text-lg md:text-2xl font-bold">2023</span>
                      <span className="text-xs md:text-sm text-muted-foreground">IIT Hyderabad</span>
                    </div>
                  </div>

                  <div className="text-center space-y-10">
                    <div className="text-center space-y-4">
                      <h3 className="text-lg md:text-3xl font-semibold tracking-tight">
                        Hey, I am Sankho,
                        <br />
                        let me tell you a secret that helped me achieve all this.
                        <br />
                      </h3>
                      <h3 className="text-lg md:text-3xl font-semibold tracking-tight">
                        It comes from being able to track, measure and organise all the stats of my life.
                      </h3>
                    </div>
                  </div>

                  <div className="text-center space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Content Creation Card */}
                      <Card className="text-center">
                        <CardHeader>
                          <Video className="w-8 h-8 mx-auto text-red-500 mb-2" />
                          <CardTitle className="text-xl font-semibold">Content Creation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Track and measure your content creation progress across platforms.</p>
                        </CardContent>
                      </Card>

                      {/* Academics Card */}
                      <Card className="text-center">
                        <CardHeader>
                          <BookOpen className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                          <CardTitle className="text-xl font-semibold">Academics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Stay on top of your academic goals and keep learning organized.</p>
                        </CardContent>
                      </Card>

                      {/* Fitness & Finances Card */}
                      <Card className="text-center">
                        <CardHeader>
                          <DollarSign className="w-8 h-8 mx-auto text-green-500 mb-2" />
                          <CardTitle className="text-xl font-semibold">Fitness & Finances</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Manage your fitness routine and financial growth effectively.</p>
                        </CardContent>
                      </Card>

                      {/* Tasks, Habits, Journal Card */}
                      <Card className="text-center">
                        <CardHeader>
                          <CheckSquare className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                          <CardTitle className="text-xl font-semibold">Tasks, Habits, Journal</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Track daily tasks, habits, and reflect on your day with journaling.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <h3 className="text-lg md:text-3xl font-semibold md:tracking-tight">
                      I use Notion to do all this, it&apos;s an incredible tool but haunting to start from scratch. <br /> That&apos;s why I&apos;ve made this collection of my favourite templates that quite literally run my life.
                    </h3>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section id="templates" className="py-12 bg-muted">
            <div className="container mx-auto px-4 space-y-10">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Discover All Premium Notion Templates</h2>
                <p className="text-lg text-muted-foreground">
                  Enhance your Productivity with our Exclusive Notion Templates
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card key={template.slug}>
                    <CardHeader>
                      <CardTitle>{template.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={template.imageUrl}
                        alt={template}
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-auto mb-4"
                      />
                      <p className="text-sm text-muted-foreground mb-4">
                        {template.shortDescription}
                      </p>
                      <div className="flex items-center justify-between gap-3">
                        <Button className="w-full">Buy Now</Button>
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="reviews" className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">See What Our Protagonist Gang Says</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Alex', comment: 'Exactly what I was trying to do on my own but it was taking me hours, found this template and it&apos;s exactly the style I love. Nice work!' },
                  { name: 'Sam', comment: 'It made my work significantly easier :)”' },
                  { name: 'Jordan', comment: 'Everything I need in one place! This life planner template saved me alot of head ache trying to figure out notion. I am so glad I found this shop.' }
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-2">&quot;{review.comment}&quot;</p>
                      <p className="font-semibold">- {review.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
              <p className="mb-6">Get started with our Notion templates today and transform your workflow.</p>
              <Button size="lg" variant="secondary">Get Your Templates Now</Button>
            </div>
          </section>

        </main>

        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-xl font-semibold">NotionTemplates</Link>
                <p className="text-sm text-muted-foreground">© 2023 NotionTemplates. All rights reserved.</p>
              </div>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                  <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}