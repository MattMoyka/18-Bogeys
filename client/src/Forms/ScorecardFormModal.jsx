

export default function ScorecardFormModal(props) {

  return (
    <form className=" flex flex-col gap-4 items-center">
      <div className="flex flex-col bg-blue-100 shadow-xl rounded-2xl p-3">
        <div className='text-2xl'>Front Nine</div>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>O</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.one}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.two}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.three}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.four}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.five}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.six}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.seven}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.eight}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.nine}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.o}</div></td>
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
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.ten}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.eleven}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.twelve}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.thirteen}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.fourteen}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.fifteen}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.sixteen}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.seventeen}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.eighteen}</div></td>
              <td><div className='w-7 border-2 border-black text-black text-center bg-white'>{props?.i}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}
