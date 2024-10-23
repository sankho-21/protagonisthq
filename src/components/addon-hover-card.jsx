import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import React from 'react'

export default function AddonHoverCard({ children, className }) {
    return (
        <HoverCard openDelay={2} closeDelay={1}>
            <HoverCardTrigger>
                {children}
            </HoverCardTrigger>
            <HoverCardContent side={'top'}>
                Hello
            </HoverCardContent>
        </HoverCard>
    )
}
