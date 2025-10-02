'use client';
import Image from 'next/image';
import { useState } from 'react';
import Question from "../components/question";
import Title from '../components/title';

const quizs = [
    {
        ques: "Were this chord progression a color, it would be…",
        ans: [
            { imgSrc: '/ques-1-bright.png', onHover: '/ques-1-dark.png', text: "Bright", ans: 0 },
            { imgSrc: '/ques-1-dark.png', onHover: '/ques-1-bright.png', text: "Dark", ans: 1 },
        ],
        isImportant: true,
    },
    {
        ques: "Of what period does this progression remind you?",
        ans: [
            { imgSrc: null, text: "The past", onHover: null, ans: 0 },
            { imgSrc: null, text: "The present", onHover: null, ans: 1 },
            { imgSrc: null, text: "The future", onHover: null, ans: 2 },
        ],
        isImportant: false,
    },
    {
        ques: "In what weather would this chord progression fit?",
        ans: [
            { imgSrc: '/ques-2-sunny.png', onHover: '/ques-2-sunny.png', text: "Sunny", ans: 0 },
            { imgSrc: '/ques-2-fair.png', onHover: '/ques-2-fair.png', text: "Fair", ans: 1 },
            { imgSrc: '/ques-2-rain.png', onHover: '/ques-2-rain.png', text: "Rainy", ans: 2 },
        ],
        isImportant: true,
    },
    {
        ques: "Where is this chord progression?",
        ans: [
            { imgSrc: '/ques-3-inside.png', onHover: '/ques-3-inside.png', text: "Inside", ans: 0 },
            { imgSrc: '/ques-3-outdoor.png', onHover: '/ques-3-outdoor.png', text: "Outdoor", ans: 1 },
        ],
        isImportant: true,
    },
]

const results: Record<string, { chord: string, name: string, desc: string, note: string }> = {
    '0-0-0': { chord: 'D A Bm G', name: 'Carousel - Blink-182', desc: 'It’s a hot, fun summer day at the pool party, but you are filled with melancholy.', note: 'Br, Su, In' },
    '0-1-1': { chord: 'D A Bm G', name: 'Carousel - Blink-182', desc: 'It’s a hot, fun summer day at the pool party, but you are filled with melancholy.', note: 'Br, Fa, Out' },
    '0-2-0': { chord: 'D A Bm G', name: 'Carousel - Blink-182', desc: 'It’s a hot, fun summer day at the pool party, but you are filled with melancholy.', note: 'Br, Ra, In' },
    '1-1-1': { chord: 'C E F Fm', name: 'Space Oddity - David Bowie', desc: 'Overwhelming sadness, like you just lost something or someone.', note: 'Da, Fa, Out' },
    '1-2-1': { chord: 'E C#m G# A', name: 'Where Is My Mind? - The Pixies', desc: 'That feeling when you shout into an empty room and hear yourself reverberating endlessly.', note: 'Da, Ra, Out' },
    '0-0-1': { chord: 'A Bm C#m D', name: 'Boys Don’t Cry - The Cure', desc: 'Jumping around gleefully like a kid, in your head, at least.', note: 'Br, Su, Out' },
    '1-0-0': { chord: 'A Bm C#m D', name: 'Boys Don’t Cry - The Cure', desc: 'Jumping around gleefully like a kid, in your head, at least.', note: 'Da, Su, In' },
    '0-2-1': { chord: 'G D Em C', name: 'Take Me Home, Country Road - John Denver', desc: 'Going through something, will get better.', note: 'Br, Ra, Out' },
    '1-0-1': { chord: 'G D Em C', name: 'Take Me Home, Country Road - John Denver', desc: 'Going through something, will get better.', note: 'Da, Su, Out' },
    '1-1-0': { chord: 'C Caug C6 C7 F Fm', name: 'Last Night On Earth - Green Day', desc: 'You watched the love of your life go away. They will probably never return.', note: 'Da, Fa, In' },
    '1-2-0': { chord: 'C Caug C6 C7 F Fm', name: 'Last Night On Earth - Green Day', desc: 'You watched the love of your life go away. They will probably never return.', note: 'Da, Ra, In' },
    '0-1-0': { chord: 'G Cadd9 D', name: 'Good Riddance (Time Of Your Life) - Green Day', desc: 'Joy and hope is in the air. The future doesn’t look so bad after all.', note: 'Br, Fa, In' },
};

export default function TestPage() {
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSelectAns = (ans: number) => {
        setAnswers(prev => ({ ...prev, [currentQ]: ans }));
    };

    const handleNextQues = () => {
        if (currentQ < 3) {
            setCurrentQ(currentQ + 1);
        } else {
            // Check if all important answers are selected
            if (answers[0] !== undefined && answers[2] !== undefined && answers[3] !== undefined) {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setShowResult(true);
                }, 3000);
            }
        }
    };

    const handlePrevQues = () => {
        setCurrentQ(Math.max(0, currentQ - 1));
    };

    if (loading) {
        return (
            <div className="fixed inset-0 bg-linear-to-l from-[#DAE82C] via-[#3C8247] via-[#0A483D] to-[#092B25] flex items-center justify-center z-50">
                <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A1C336]"></div>
                        <Title text="Loading..." />
                    </div>
                    <p className="text-lg">
                        Please remember, broaden your knowledge on music so as not to become dependent on the quiz!
                    </p>
                </div>
            </div>
        );
    }

    if (showResult) {
        const key = `${answers[0]}-${answers[2]}-${answers[3]}`;
        const res = results[key] || { chord: 'Unknown', name: 'Unknown', desc: 'No result found.', note: '' };
        return (
            <div className="flex justify-center items-center h-screen overflow-hidden bg-linear-to-l from-[#DAE82C] via-[#3C8247] via-[#0A483D] to-[#092B25]">
                <div className="max-w-7xl space-y-8">
                    <div className="mb-6 text-[32px]">You could be looking for</div>
                    <Title text={res.chord}></Title>
                    <hr className="border-white border-2 my-6" />
                    <div className="mb-6 text-lg text-[#7EBE88]">{res.desc}</div>
                    <div className=" flex items-center border-y-4 rounded-r-3xl">
                        <div className="flex-6 font-bold text-[32px]">
                            <div className="text-sm mb-1">Example:</div>
                            <div className="font-bold text-lg">{res.name}</div>
                        </div>
                        <div className="flex-2 flex justify-center">
                            <Image src="/arrow-circle-right.svg" alt="arrow" width={56} height={56} />
                        </div>
                        <button
                            onClick={() => {
                                setShowResult(false);
                                setCurrentQ(0);
                                setAnswers({});
                            }}
                            className="flex items-center gap-4 ring-4 rounded-3xl px-6 py-3 text-2xl font-bold uppercase hover:bg-white hover:text-[#A1C336] transition-colors duration-300"
                        >
                            <Title text='Again'></Title>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Question
            ques={quizs[currentQ].ques}
            ans={quizs[currentQ].ans}
            important={quizs[currentQ].isImportant}
            selectedAns={answers[currentQ] !== undefined ? answers[currentQ] : null}
            onSelectAns={handleSelectAns}
            onNextQues={handleNextQues}
            onPrevQues={handlePrevQues}
        />
    );
}
