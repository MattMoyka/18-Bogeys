


export default function ScorecardForm(props) {



  return (
    <form onSubmit={props.handleSubmit}>
      <div className="grid grid-cols-9 grid-rows-2 text-base justify-items-start m-10 p-5 border-4 border-black bg-green-200 rounded-xl">
        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>


        <input className='w-7 border-4 border-black' type='text' value={props?.one} onChange={e => props.setOne(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.two} onChange={e => props.setTwo(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.three} onChange={e => props.setThree(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.four} onChange={e => props.setFour(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.five} onChange={e => props.setFive(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.six} onChange={e => props.setSix(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.seven} onChange={e => props.setSeven(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.eight} onChange={e => props.setEight(e.target.value)} />
        <input className='w-7 border-4 border-black' type='text' value={props?.nine} onChange={e => props.setNine(e.target.value)} />
      </div>
      <button>save score card</button>
    </form>
  )
}
