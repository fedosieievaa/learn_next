import Link from "next/link";
import s from '/styles/error.module.css'
const ErrorPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.error}>
                <h1>Error 404</h1>
                <p>Please, <Link href={'/'}><a className={s.error_back_home}>go back</a></Link> to safety</p>
            </div>
        </div>
    )
}

export default ErrorPage;