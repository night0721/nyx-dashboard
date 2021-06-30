import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/react"

import React from 'react'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const MotionStatGroup = motion(StatGroup)
const MotionStat = motion(Stat)

function StatCard() {
    return (
        <MotionStatGroup display='flex' flexDirection='column' style={{ gap: '10px' }} variants={container}>
            <MotionStat background='gray.900' width={300} height={150} p='5' borderRadius='15px' flexShrink={1} variants={item}>
                <StatLabel>User Growth</StatLabel>
                <StatNumber>77</StatNumber>
                <StatHelpText>
                    <StatArrow type="increase" />
                    11.36%
                </StatHelpText>
            </MotionStat>

            <MotionStat background='gray.900' width={300} height={150} p='5' borderRadius='15px' flexShrink={1} variants={item}>
                <StatLabel>Activity</StatLabel>
                <StatNumber>45 messages</StatNumber>
                <StatHelpText>
                    <StatArrow type="decrease"/>
                    9.05%
                </StatHelpText>
            </MotionStat>
        </MotionStatGroup>
    )
}

export default StatCard