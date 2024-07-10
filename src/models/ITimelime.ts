




export interface ISlide {
    title: string | number;
    text: string;
}

export interface ITimeline {
    title: string;
    start: number;
    end: number;
    slides: ISlide[];
}