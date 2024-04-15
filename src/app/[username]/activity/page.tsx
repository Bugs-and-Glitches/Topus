
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <div className="h-40 border-b-2 w-full flex justify-start items-center">
      <p className="text-2xl font-semibold p-5">Activity</p>
    </div>
    <div className="flex md:flex-row flex-col justify-center items-center">
      <div className="md:border-r-2 border-b-2 md:h-screen h-full w-full md:w-[30%] p-5 font-semibold">
Filter
<div className="mt-3">

<Accordion type="single" collapsible className="md:w-full px-2 rounded-xl border-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
</div>
      </div>
      <div className=" h-screen md:w-full">
hello
      </div>
    </div>
    </>
  );
}
