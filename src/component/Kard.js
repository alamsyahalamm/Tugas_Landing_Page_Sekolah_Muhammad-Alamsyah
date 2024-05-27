import { Card } from "flowbite-react";

function Kard() {
  return (
    <div className="container mx-auto">
      <Card className="mt-[-100px] z-10">
        <div class="grid grid-cols-3 gap-4">
          <div class="...">
            <Card
              className="w-full"
              imgSrc="/images/blog/image-4.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div class="...">
            <Card
              className="w-full"
              imgSrc="/images/blog/image-4.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div class="...">
            {" "}
            <Card
              className="w-full"
              imgSrc="/images/blog/image-4.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default Kard;
