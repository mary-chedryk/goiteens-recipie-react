export function ChangeBtn({onIncreasement, onDecreasement}) {
    return <div className='d-flex justify-content-center px-5'>
        <button
            onClick={onIncreasement}
            className='btn btn-outline-success me-5'
        >
            <i className='bi bi-plus-circle fs-1'></i>
        </button>
        <button
            onClick={onDecreasement}
            className='btn  btn-outline-danger ms-5'
        >
            <i className='bi bi-dash-circle fs-1'></i>
        </button>
    </div>
}