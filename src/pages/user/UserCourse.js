import React from "react";
import PageMenu from "../../components/PageMenu";
import Wrapper from "../../components/Wrapper";

const course = [
  {
    title: "Gita in Action",
    img: "https://sambadenglish.com/wp-content/uploads/2020/05/bhagavad-gita.jpg",
    text: "After traveling the whole world, Bhagavad Gita comes at your doorstep! Let's deep dive upon how this science uncover profound insights that resonate deeply with our day-to-day struggles and triumphs.",
  },
  {
    title: "Gita Sutras for life",
    img: "https://sambadenglish.com/wp-content/uploads/2020/05/bhagavad-gita.jpg",
    text: "Dive into the timeless wisdom of the Gita with 'Gita Sutras for Life' – a transformative journey unlocking ancient secrets for modern living.",
  },
  {
    title: "Art of Smart Work",
    img: "https://sambadenglish.com/wp-content/uploads/2020/05/bhagavad-gita.jpg",
    text: "Discover the Art of Smart Work – an empowering exploration of ancient strategies for mastering productivity and achieving success effortlessly",
  },
  {
    title: "Converting stress to smile",
    img: "https://sambadenglish.com/wp-content/uploads/2020/05/bhagavad-gita.jpg",
    text: "Embark on a journey to transform stress into smiles with our course, offering practical tools and timeless wisdom to cultivate resilience, inner peace, and radiant joy.",
  },
  {
    title: "Happiness Mantra",
    img: "https://sambadenglish.com/wp-content/uploads/2020/05/bhagavad-gita.jpg",
    text: ' Delve into the secrets of eternal joy with "Happiness Mantra," a transformative course revealing ancient wisdom and practical strategies to cultivate lasting happiness and inner fulfillment',
  },
  {
    title: "Art of Harnessing Mind Power",
    img: "https://sambadenglish.com/wp-content/uploads/2020/05/bhagavad-gita.jpg",
    text: 'Unlock the limitless potential of your mind with "Art of Harnessing Mind Power," a transformative course guiding you to unleash inner strength, achieve clarity, and manifest your dreams with the power of your mind.',
  },
];

const UserCourse = () => {
  return (
    <div>
      <PageMenu />
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 px-5 md:px-0">
          {course.map((item, index) => (
            <div
              href="/product/1"
              key={index}
              className="transform overflow-hidden bg-white duration-200 border hover:scale-105 cursor-pointer"
            >
              <img className="w-full" src={item.img} alt="Product Image" />
              <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg text-center font-semibold">
                  {item.title}
                </h2>
                <div className="flex item-center text-black/[0.5]">
                  <p className="mr-2 text-lg  font-medium">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default UserCourse;