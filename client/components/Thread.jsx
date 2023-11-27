const Thread = () => {

  return (
      <article className="feed-card">
        <div className="text-container">
          <div>
            <div className="img-container">
              <img src="" alt="profile avatar" />
            </div>
            <div>
              <p><strong>hanlde</strong></p>
              <p>text</p>
            </div>
          </div>
          <p className="sub-text">time</p>
        </div>
        <div className="icons">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.685 10 8.213 0 5.04-5.146 8.159-9.913 8.159-2.027 0-3.548-.439-4.548-.712l-4.004 1.196 1.252-2.9c-.952-1-2.787-2.588-2.787-5.743 0-4.528 4.486-8.213 10-8.213zm0-2c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c1.585.434 3.101.632 4.523.632 7.098.001 11.914-4.931 11.914-10.159 0-5.64-5.372-10.213-12-10.213z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.203 7l-1.594-2h3.391v2h-1.797zm2.797-2v2h3v-2h-3zm2 14v-2h-3v2h3zm8-5v-9h-6v2h4v7h-3l4 5 4-5h-3zm-12 5v-2h-4v-7h3l-4-5-4 5h3v9h6zm5-2v2h3.391l-1.594-2h-1.797z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
        </div>
        <p className="sub-text"><span>X replies</span> • <span>X likes</span></p>
      </article>
  )
}

export default Thread
