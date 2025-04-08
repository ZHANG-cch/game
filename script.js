document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 隐藏登录表单
    document.querySelector('.login-container').style.display = 'none';
    
    // 显示消息
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    
    // 显示并播放视频
    const video = document.getElementById('video');
    video.classList.remove('hidden');
    video.play();
    
    // 视频播放结束时关闭页面
    video.addEventListener('ended', function() {
        window.close();
    });
}); 