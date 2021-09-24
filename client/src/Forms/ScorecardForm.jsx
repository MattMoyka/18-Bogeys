


export default function ScorecardForm(props) {

  return (
    <form onSubmit={props.handleSubmit} className=" flex flex-col gap-4 items-center">
      <div className="flex flex-col border-2 border-black bg-blue-100 rounded-xl p-3">
        <div className='text-2xl'>Front Nine</div>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>O</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input className='w-7 border-2 border-black text-black text-center' autoFocus type='number' value={props?.one} onChange={e => props.setOne(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.two} onChange={e => props.setTwo(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.three} onChange={e => props.setThree(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.four} onChange={e => props.setFour(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.five} onChange={e => props.setFive(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.six} onChange={e => props.setSix(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.seven} onChange={e => props.setSeven(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.eight} onChange={e => props.setEight(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.nine} onChange={e => props.setNine(e.target.value)} /></td>
              <td><div className='w-7 border-2 border-black text-black bg-white text-center' type='number'>{props?.o}</div></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5 text-2xl">Back Nine</div>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>I</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.ten} onChange={e => props.setTen(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.eleven} onChange={e => props.setEleven(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.twelve} onChange={e => props.setTwelve(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.thirteen} onChange={e => props.setThirteen(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.fourteen} onChange={e => props.setFourteen(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.fifteen} onChange={e => props.setFifteen(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.sixteen} onChange={e => props.setSixteen(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.seventeen} onChange={e => props.setSeventeen(e.target.value)} /></td>
              <td><input className='w-7 border-2 border-black text-black text-center' type='number' value={props?.eighteen} onChange={e => props.setEighteen(e.target.value)} /></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white' type='number'>{props?.i}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-success text-white">save score card</button>
    </form>
  )
}
