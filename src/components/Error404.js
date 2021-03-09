import '../custom.css'
function Error404() {
    return (
        <div className ="main-wrapper">
            <div class="error-box">
            <div class="error-body text-center">
                <h1 class="error-title textDanger">404</h1>
                <h3 class="text-uppercase error-subtitle mt-4">PAGE NOT FOUND !</h3>
                <p class="text-muted m-t-30 m-b-30 mt-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                <a href="index.html" class="btn btnDanger rounded-pill waves-effect waves-light pl-3 pr-3 text-white mt-4">Back to home</a>
            </div>
        </div>
        </div>
    )
}

export default Error404
