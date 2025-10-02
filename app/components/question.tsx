
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
        <div className="relative flex justify-center min-h-screen overflow-hidden bg-linear-to-l from-[#DAE82C] via-[#3C8247] via-[#0A483D] to-[#092B25] px-4" style={{ backgroundImage: hoverBg ? `url(${hoverBg})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl w-full space-y-4 md:space-y-8 mt-20 md:mt-40">
                <div className="flex justify-center gap-10 md:gap-20">
                    <Image onClick={onPrevQues} src={'/arrow-circle-left.svg'} width={40} height={40} alt="" className="cursor-pointer hover:scale-110 transition-all duration-300 md:w-14 md:h-14"></Image>
                    <Image onClick={onNextQues} src={'/arrow-circle-right.svg'} width={40} height={40} alt="" className="cursor-pointer hover:scale-110 transition-all duration-300 md:w-14 md:h-14"></Image>
                </div>
                {/* QUES */}
                <Title text={ques} />
                {/* ANSWER */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                    {ans.map((eachAns, i) => {
                        const isSelected = selectedAns === eachAns.ans;
                        return (
                            <div key={i} className={`flex flex-col cursor-pointer p-2 md:p-4 hover:ring-1 rounded-3xl ${isSelected ? 'ring-4 ring-white' : ''}`} onClick={() => onSelectAns(eachAns.ans)} onMouseEnter={() => { if (eachAns.onHover) setHoverBg(eachAns.onHover); }} onMouseLeave={() => setHoverBg(null)}>
                                <div className=''>
                                    {eachAns.imgSrc &&
                                        <Image src={eachAns.imgSrc} alt={eachAns.text ? eachAns.text : ''} width={200} height={130} className="md:w-[364px] md:h-[235px]"></Image>
                                    }
                                </div>
                                <div className={`${anton_SC.className} text-2xl md:text-[56px] uppercase ${isSelected ? 'text-yellow-300' : ''}`}>
                                    {eachAns.text}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* AUTHOR */}
                <div className="absolute right-4 bottom-4 md:right-0 md:bottom-0 italic text-sm md:text-medium">
                    Photos Belong to: <br />
                    Pham Minh Dung<br />
                    Tran Nhat Hoang<br />
                </div>
            </div>
        </div>
    )
}