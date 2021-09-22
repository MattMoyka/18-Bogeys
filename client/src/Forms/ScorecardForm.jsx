


export default function ScorecardForm(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="flex flex-col">
        <div className='flex justify-evenly'>
          <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
        </div>
        <div className='flex justify-evenly'>
          <input className='w-7 border-4 border-black text-black' autoFocus type='text' value={props?.one} onChange={e => props.setOne(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.two} onChange={e => props.setTwo(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.three} onChange={e => props.setThree(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.four} onChange={e => props.setFour(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.five} onChange={e => props.setFive(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.six} onChange={e => props.setSix(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.seven} onChange={e => props.setSeven(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.eight} onChange={e => props.setEight(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.nine} onChange={e => props.setNine(e.target.value)} />
        </div>
        <div className='flex justify-evenly'>
          <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div>
        </div>
        <div className='flex justify-evenly'>
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.ten} onChange={e => props.setTen(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.eleven} onChange={e => props.setEleven(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.twelve} onChange={e => props.setTwelve(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.thirteen} onChange={e => props.setThirteen(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.fourteen} onChange={e => props.setFourteen(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.fifteen} onChange={e => props.setFifteen(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.sixteen} onChange={e => props.setSixteen(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.seventeen} onChange={e => props.setSeventeen(e.target.value)} />
          <input className='w-7 border-4 border-black text-black' type='text' value={props?.eighteen} onChange={e => props.setEighteen(e.target.value)} />
        </div>
      </div>
      <button>save score card</button>
    </form>
  )
}
