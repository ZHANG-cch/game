document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 播放音效
    const sound = document.getElementById('sound');
    sound.play();
    
    // 显示消息
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    
    // 2秒后关闭页面
    setTimeout(() => {
        window.close();
    }, 2000);
}); 