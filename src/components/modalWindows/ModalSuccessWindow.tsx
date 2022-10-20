import modal from './ModalSuccessWindow.module.css'

type modal = {
    res: string
}
export const ModalSuccessWindow = (props: modal) => {
    return <div className={modal.wrapper}>{props.res}</div>
}