
import Title from "./title"
import Image from "next/image"
import { anton_SC } from "./font"
import { useState } from "react"

interface QuestionProps {
    ques: string,
    ans: {
        imgSrc: string | null,
        onHover: string | null,
        text: string,
        ans: number
    }[],
    important: boolean,
    selectedAns: number | null,
    onSelectAns: (ans: number) => void,
    onNextQues: () => void,
    onPrevQues: () => void
}

export default function Question({ ques, ans, important, selectedAns, onSelectAns, onNextQues, onPrevQues }: QuestionProps) {
    const [hoverBg, setHoverBg] = useState<string | null>(null);

    return (
        <div className="relative flex justify-center  h-screen overflow-hidden bg-linear-to-l from-[#DAE82C] via-[#3C8247] via-[#0A483D] to-[#092B25]" style={{ backgroundImage: hoverBg ? `url(${hoverBg})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl space-y-8 mt-40">
                <div className="flex gap-20">
                    <Image onClick={onPrevQues} src={'/arrow-circle-left.svg'} width={56} height={56} alt="" className="cursor-pointer hover:scale-110 transition-all duration-300"></Image>
                    <Image onClick={onNextQues} src={'/arrow-circle-right.svg'} width={56} height={56} alt="" className="cursor-pointer hover:scale-110 transition-all duration-300"></Image>
                </div>
                {/* QUES */}
                <Title text={ques} />
                {/* ANSWER */}
                <div className="flex justify-start gap-10">
                    {ans.map((eachAns, i) => {
                        const isSelected = selectedAns === eachAns.ans;
                        return (
                            <div key={i} className={`flex flex-col cursor-pointer p-4 hover:ring-1 rounded-3xl ${isSelected ? 'ring-4 ring-white' : ''}`} onClick={() => onSelectAns(eachAns.ans)} onMouseEnter={() => { if (eachAns.onHover) setHoverBg(eachAns.onHover); }} onMouseLeave={() => setHoverBg(null)}>
                                <div className=''>
                                    {eachAns.imgSrc &&
                                        <Image src={eachAns.imgSrc} alt={eachAns.text ? eachAns.text : ''} width={364} height={235}></Image>
                                    }
                                </div>
                                <div className={`${anton_SC.className} text-[56px] uppercase ${isSelected ? 'text-yellow-300' : ''}`}>
                                    {eachAns.text}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* AUTHOR */}
                <div className="absolute right-0 bottom-0 italic text-medium">
                    Photos Belong to: <br />
                    Pham Minh Dung<br />
                    Tran Nhat Hoang<br />
                </div>
            </div>
        </div>
    )
}