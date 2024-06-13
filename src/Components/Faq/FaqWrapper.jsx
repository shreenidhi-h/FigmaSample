import React, { useState } from "react";
import icronWrap from "./iconWrap.png";
import plusCircle from "./plusCircle.png";

const FaqItem = ({ question, answer, index }) => {
	const [isOpened, setIsopened] = useState(index === 0);

	return (
		<>
			<div
				className="flex first:border-t-0 justify-between border-t items-center py-6"
				onClick={() => {
					setIsopened(!isOpened);
				}}
			>
				<div className="text-lg font-medium text-left text-coal mb-2">
					{question}
				</div>
				<img src={isOpened ? icronWrap : plusCircle} />
			</div>
			{isOpened ? (
				<div className="mb-6 text-uda text-left font-normal text-base">
					{answer}
				</div>
			) : null}
		</>
	);
};

const Faqitems = [
	{
		question: "Is there a free trial available?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	,
	{
		question: "Can I change my plan later?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		question: "What is your cancellation policy?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		question: "Can other info be added to an invoice?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		question: "Is there a free trial available?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		question: "How does billing work?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
];

export const FaqWrapper = () => {
	return (
		<div className="flex flex-col justify-center items-left">
			{Faqitems.map((item, index) => (
				<FaqItem question={item.question} answer={item.answer} index={index} />
			))}
		</div>
	);
};
