


export default function ScorecardForm(props) {

  return (
    <form onSubmit={props.handleSubmit} className=" flex flex-col gap-4 items-center">
      <div className="flex flex-col border-2 border-black w-11/12">
        <div>Front Nine</div>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input className='w-7 border-4 border-black text-black text-center' autoFocus type='text' value={props?.one} onChange={e => props.setOne(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.two} onChange={e => props.setTwo(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.three} onChange={e => props.setThree(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.four} onChange={e => props.setFour(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.five} onChange={e => props.setFive(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.six} onChange={e => props.setSix(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.seven} onChange={e => props.setSeven(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.eight} onChange={e => props.setEight(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.nine} onChange={e => props.setNine(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5">Back Nine</div>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.ten} onChange={e => props.setTen(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.eleven} onChange={e => props.setEleven(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.twelve} onChange={e => props.setTwelve(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.thirteen} onChange={e => props.setThirteen(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.fourteen} onChange={e => props.setFourteen(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.fifteen} onChange={e => props.setFifteen(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.sixteen} onChange={e => props.setSixteen(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.seventeen} onChange={e => props.setSeventeen(e.target.value)} /></td>
              <td><input className='w-7 border-4 border-black text-black text-center' type='text' value={props?.eighteen} onChange={e => props.setEighteen(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-outline btn-primary">save score card</button>
    </form>
  )
}
