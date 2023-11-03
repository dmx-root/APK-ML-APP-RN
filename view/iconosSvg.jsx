// import * as React from  "react"
import Svg, { Path, Circle, Rect,Ellipse }  from "react-native-svg"
import { Dimensions }               from 'react-native';

const { height } = Dimensions.get('window');

const currentColorMain='#44329C';
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

export function PlusSeg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"#FFF"}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-square"
    >
      {/* <Circle cx={12} cy={12} r={10} /> */}
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  )
}
export function PlusOcr(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"#FFF"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-square"
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  )
}
export function UserPlus(props) {
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
      className="feather feather-user-plus"
      {...props}
    >
      <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <Circle cx={8.5} cy={7} r={4} />
      <Path d="M20 8L20 14" />
      <Path d="M23 11L17 11" />
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
      stroke={"#fff"}
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
      width={height*0.045}
      height={height*0.045}
      viewBox="0 0 24 24"
      fill="#AAA"
      stroke="#AAA"
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
      width={56}
      height={56}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain4}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-circle"
    >
      
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

export function RoowLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.data}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-left"
    >
      <Path d="M19 12L5 12" />
      <Path d="M12 19L5 12 12 5" />
    </Svg>
  )
}

export function OCRIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.data.size}
      height={props.data.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.data.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-box"
    >
      <Path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <Path d="M3.27 6.96L12 12.01 20.73 6.96" />
      <Path d="M12 22.08L12 12" />
    </Svg>
  )
}

export function RefreshIcon({data}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.size}
      height={data.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColorMain}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-refresh-ccw"
    >
      <Path d="M1 4L1 10 7 10" />
      <Path d="M23 20L23 14 17 14" />
      <Path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
    </Svg>
  )
}

export function FilterIcon({data}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.size}
      height={data.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={data.color}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-filter"
    >
      <Path d="M22 3L2 3 10 12.46 10 19 14 21 14 12.46 22 3z" />
    </Svg>
  )
}

export function CheckBoxEmpty({data}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.size}
      height={data.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={data.color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-square"
    >
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    </Svg>
  )
}

export function CheckBoxFill({data}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.size}
      height={data.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={data.color}
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-square"
    >
      <Path d="M9 11L12 14 22 4" />
      <Path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </Svg>
  )
}

export  function ModuloIcon({size,color}) {
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
export  function ModuloIconList() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={height*0.045}
      height={height*0.045}
      viewBox="0 0 24 24"
      fill={'none'}
      stroke={'#888'}
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
export  function ModuloIconList2({color,size}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
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
export  function ModuloIconList3({color,size}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={'#BBB'}
      stroke={color}
      strokeWidth={1.6}
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

export function ReviseIcon({color,size}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-edit"
    >
      <Path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <Path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
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


export function LayersIcon({size,color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-layers"
    >
      <Path d="M12 2L2 7 12 12 22 7 12 2z" />
      <Path d="M2 17L12 22 22 17" />
      <Path d="M2 12L12 17 22 12" />
    </Svg>
  )
}