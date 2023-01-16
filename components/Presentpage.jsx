
import datas from '../datas/homepagedata.json'

export default function Present() {
    return (
        <div>
            <p className='text-white'>{datas.title}</p>
        </div>
    )
}