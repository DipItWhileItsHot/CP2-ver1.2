document.querySelectorAll('.role-button').forEach(btn => {
    btn.addEventListener('click', function() {
        // Add loading state to button
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';
                
        // Delay navigation slightly to show visual feedback
        setTimeout(() => {
            window.location.href = btn.onclick.toString().match(/window\.location\.href='(.*?)'/)[1];
        }, 300);
    });
});