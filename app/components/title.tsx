
import { anton_SC } from "./font"



export default function Title({ text }: { text: string }) {
    return (
        <div className={`${anton_SC.className} text-4xl sm:text-6xl md:text-8xl uppercase`}>
            {text}
        </div>
    )
}
