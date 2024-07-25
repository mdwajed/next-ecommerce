import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "../MTailwind";
import Link from "next/link";
import Image from "next/image";
export default function NewProducts() {
  return (
    <div className="max-w-6xl mx-auto mt-12 md:mt-24">
      <h1 className="text-2xl font-semibold my-8">New Products</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        <Link href="/test">
          <Card className="w-full">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-60 relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                fill
                className="h-60 w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri access
                .
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <button className=" rounded-2xl ring-1 ring-wajed py-2 px-4 hover:bg-wajed hover:text-white">
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/test">
          <Card className="w-full">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-60 relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                fill
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri access
                .
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <button className=" rounded-2xl ring-1 ring-wajed py-2 px-4 hover:bg-wajed hover:text-white">
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/test">
          <Card className="w-full">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-60 relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                fill
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri access
                .
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <button className=" rounded-2xl ring-1 ring-wajed py-2 px-4 hover:bg-wajed hover:text-white">
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/test">
          <Card className="w-full">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-60 relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                fill
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri access
                .
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <button className=" rounded-2xl ring-1 ring-wajed py-2 px-4 hover:bg-wajed hover:text-white">
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}
