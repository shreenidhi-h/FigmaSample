import React, { useState } from "react";
import icronWrap from "./iconWrap.png";
import plusCircle from "./plusCircle.png";
import styles from "./Faq.module.css";

const FaqItem = ({ question, answer, index }) => {
	const [isOpened, setIsopened] = useState(index === 0);

	return (
		<>
			<div
				className={styles.question}
				onClick={() => {
					setIsopened(!isOpened);
				}}
			>
				<div className={styles.text1}>{question}</div>
				<img src={isOpened ? icronWrap : plusCircle} />
			</div>
			{isOpened ? <div className={styles.sText1}>{answer}</div> : null}
		</>
	);
};

const Faqitems = [
	{
		question: "Is there a free trial available?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
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
		<div>
			{Faqitems.map((item, index) => (
				<FaqItem question={item.question} answer={item.answer} index={index} />
			))}
		</div>
	);
};
