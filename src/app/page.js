import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeader from '@/components/layout/SectionHeader';

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className='text-center my-12'>
        <SectionHeader
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            The purpose of lorem ipsum is to create a natural
            looking block of text sentence, paragraph, page,
            etc. that doesn't distract from the layout. A 
            practice not without controversy, laying out 
            pages with meaningless filler text can be very 
            useful when the focus is meant to be on design, 
            not content.
          </p>
          <p>
            The placeholder text, beginning with the line 
            “Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit”, looks like Latin because in its youth, 
            centuries ago, it was Latin.
          </p>
          <p>
            McClintock's eye for detail certainly helped narrow 
            the whereabouts of lorem ipsum's origin, however, 
            the “how and when” still remain something of a mystery, 
            with competing theories and timelines.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeader
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className='mt-8'>
          <a className='text-4xl underline text-gray-500'>
            +095 160 0721
          </a>
        </div>
      </section>
    </>
  );
};
