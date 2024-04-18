import { createContext } from "react"
import { useCounter } from "../components/Function"

export const CounterContext = createContext(useCounter)
