// Featured posts data
const featuredPosts = [
    {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        title: "How to Build Multiple Streams of Income in 2025",
        desc: "Discover proven strategies to diversify your income and achieve financial freedom. Explore side hustles, passive income ideas, and investment tips for a secure future."
    },
    {
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80",
        title: "10 Side Hustles You Can Start This Weekend",
        desc: "Kickstart your earnings with these easy-to-begin side hustles. No experience required, just motivation and a few hours!"
    },
    {
        img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=900&q=80",
        title: "Passive Income: Myths vs. Reality",
        desc: "Uncover the truth about passive income and learn what really works in 2025."
    }
];

let currentFeatured = 0;

document.getElementById('next-featured').addEventListener('click', () => {
    currentFeatured = (currentFeatured + 1) % featuredPosts.length;
    document.getElementById('featured-img').src = featuredPosts[currentFeatured].img;
    document.getElementById('featured-title').textContent = featuredPosts[currentFeatured].title;
    document.getElementById('featured-desc').textContent = featuredPosts[currentFeatured].desc;
});

// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Enable smooth scroll for the whole page (for browsers that support it)
// document.documentElement.style.scrollBehavior = "smooth";