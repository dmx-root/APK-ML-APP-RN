import * as React from "react"
import Svg, { Path, Circle,Rect, Ellipse } from "react-native-svg"
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
// console.log(rex)

const currentColorMain='#44329C';
const currentColorMain1='#C7CCEC';
const currentColorMain2='#e8e8e8'
const currentColorMain3='#717171'
const currentColorMain4='#44329ca5';//Azul claro intermedio



export function UserIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={42}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#44329C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  )
}

export function CalendarIcon() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#44329C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-calendar"
      >
        <Rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <Path d="M16 2L16 6" />
        <Path d="M8 2L8 6" />
        <Path d="M3 10L21 10" />
      </Svg>
    )
}

export  function DatabaseIcon({data}) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={height*0.035}
        height={height*0.035}
        viewBox="0 0 24 24"
        fill="none"
        stroke={data}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-database"
      >
        <Ellipse cx={12} cy={5} rx={9} ry={3} />
        <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </Svg>
    )
}

export  function ModuloIcon() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={height*0.035}
        height={height*0.035}
        viewBox="0 0 24 24"
        fill="none"
        stroke={currentColorMain}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-monitor"
      >
        <Rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
        <Path d="M8 21L16 21" />
        <Path d="M12 17L12 21" />
      </Svg>
    )
}

export function BarIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.02}
      height={height*0.02}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.data}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bar-chart-2"
    >
      <Path d="M18 20L18 10" />
      <Path d="M12 20L12 4" />
      <Path d="M6 20L6 14" />
    </Svg>
  )
}

export function PlusRect(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-square"
    >
      {/* <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} /> */}
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  )
}

export function OcrIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-upload-cloud"
    >
      <Path d="M16 16L12 12 8 16" />
      <Path d="M12 12L12 21" />
      <Path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      <Path d="M16 16L12 12 8 16" />
    </Svg>
  )
}

export function SearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain4}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
    >
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21L16.65 16.65" />
    </Svg>
  )
}
export function RowDown(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <Path d="M6 9L12 15 18 9" />
    </Svg>
  )
}

export function RowUpp(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-up"

    >
      <Path d="M18 15L12 9 6 15" />
    </Svg>
  )
}

export function MenuIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={46}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.data}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-list"
    >
      <Path d="M8 6L21 6" />
      <Path d="M8 12L21 12" />
      <Path d="M8 18L21 18" />
      <Path d="M3 6L3.01 6" />
      <Path d="M3 12L3.01 12" />
      <Path d="M3 18L3.01 18" />
    </Svg>)
}

export function User(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  )
}

export function User2(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.03}
      height={height*0.03}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#bbb"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  )
}

export function LogOut(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-log-out"
    >
      <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <Path d="M16 17L21 12 16 7" />
      <Path d="M21 12L9 12" />
    </Svg>
  )
}

export function PlusCirc(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-circle"
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  )
}

export function Lock(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.03}//28
      height={height*0.03}//28
      viewBox="0 0 24 24"
      fill="none"
      stroke="#bbb"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-lock"
    >
      <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
      <Path d="M7 11V7a5 5 0 0110 0v4" />
    </Svg>
  )
}

export function CheckIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.04}
      height={height*0.04}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
    >
      <Path d="M20 6L9 17 4 12" />
    </Svg>
  )
}
export function CloseIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.04}
      height={height*0.04}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <Path d="M18 6L6 18" />
      <Path d="M6 6L18 18" />
    </Svg>
  )
}
export function CedulaIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.03}
      height={height*0.03}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#bbb"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-credit-card"
    >
      <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
      <Path d="M1 10L23 10" />
    </Svg>
  )
}
export function UsersIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.03}
      height={height*0.03}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#BBB"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-users"
      {...props}
    >
      <Path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <Circle cx={9} cy={7} r={4} />
      <Path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </Svg>
  )
}