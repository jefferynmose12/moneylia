export type CustomButtonProps = {
    text : string,
    px : string,
    backgroundColor : string,
    press ? : any
}

export type UserSummaryProps = {
    first : string,
    second : string,
    colorOne? : boolean,
}

export type CardBoxProps = {
    icon : any,
    text : string,
    unavailable? : boolean,
    amount? : string
}

export type StatusBarProps = {
    text : any,
    bg : string
}

export type DetailProps = {
    head : string,
    text : string
}

export type TotalProps = {
    total : string
}

export type HomeIconProps = {
    text : string,
    color ? : Boolean
}

export type PaymentSectionProps = {
    payment : any,
    navigation : any
}