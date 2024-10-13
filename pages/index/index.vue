<template>
  <div class="container">
    <h1 class="page-title">工厂主页</h1>
    
    <!-- 轮播图区域 -->
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="getImageUrl(image)" alt="carousel image" class="carousel-img">
		  
        </div>
      </div>
    </div>

    <!-- 公告滚动区域 -->
    <div class="announcement-container">
      <div class="announcement-inner" :style="{ transform: `translateY(-${announcementIndex * announcementHeight}px)` }">
        <div class="announcement-item" v-for="(announcement, index) in announcements" :key="index">
          {{ announcement }}
        </div>
      </div>
    </div>

    <!-- 应用图标与链接区域 -->
    <div class="app-icons">
      <a :href="appLinks[index].url" target="_blank" class="app-icon" v-for="(appLink, index) in appLinks" :key="index">
        <img :src="appLink.icon" alt="App Icon" class="icon-img">
        <span>{{ appLink.text }}</span>
      </a>
    </div>

    <!-- 新增的应用图标与链接区域 -->
    <div class="app-icons second-row">
      <a :href="secondRowApps[index].url" target="_blank" class="app-icon" v-for="(secondRowApp, index) in secondRowApps" :key="index">
        <img :src="secondRowApp.icon" alt="Second Row App Icon" class="icon-img">
        <span>{{ secondRowApp.text }}</span>
      </a>
    </div>

    <!-- 紧急联系人区域 -->
    <div class="emergency-contacts">
      <span class="contact-name">紧急联系人</span>
      <span class="contact-number">12345678</span>
    </div>

    <!-- 圆形图标与描述区域 -->
    <div class="circle-icons">
      <div class="circle-icon" v-for="(circle, index) in circleIcons" :key="index">
        <img :src="circle.icon" alt="Circle Icon" class="icon-img">
        <span>{{ circle.description }}</span>
        <span>{{ circle.number }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #343a40;
  font-family: 'Arial', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.carousel {
  width: 100%;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

/* 公告滚动区域样式 */
.announcement-container {
  width: 100%;
  max-width: 600px;
  height: 30px; /* 根据需要调整高度 */
  overflow: hidden;
  background-color: #e9ecef; /* 背景颜色 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.announcement-inner {
  transition: transform 0.5s ease;
}

.announcement-item {
  text-align: center;
  font-size: 10px;
  color: #343a40;
  padding: 5px 0; /* 公告项的内边距 */
}


/* 应用图标 */
.app-icons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.app-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.icon-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 5px;
}

/* 紧急联系人 */
.emergency-contacts {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  align-items: center;
  font-size: 14px;
  color: #343a40;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.contact-name {
  font-weight: bold;
}

.contact-number {
  font-size: 12px;
}

/* 圆形图标与描述 */
.circle-icons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
}

.circle-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.circle-icon .icon-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
}

.circle-icon span:nth-child(2) {
  margin-bottom: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: ['lun1.jpg', 'lun2.jpg', 'lun3.jpg'],
      interval: null,
      announcementIndex: 0,
      announcements: ['公告1：欢迎光临！', '公告2：新品上市！', '公告3：优惠活动进行中！'],
      announcementInterval: null,
      announcementHeight: 30,
      appLinks: [
        {
          icon: '/static/image/jian.png',
          text: '产品检验',
          url: '#/app1',
        },
        {
          icon: '/static/image/yan.png',
          text: '质量检测',
          url: '#/app2',
        },
        {
          icon: '/static/image/bao.png',
          text: '质量报告',
          url: '#/app3',
        },
      ],
      secondRowApps: [
        {
          icon: '/static/image/sheng.png',
          text: '生产计划',
          url: '#/app4',
        },
        {
          icon: '/static/image/cai.png',
          text: '采购计划',
          url: '#/app5',
        },
        {
          icon: '/static/image/xiao.png',
          text: '销售计划',
          url: '#/app6',
        },
      ],
      circleIcons: [
        {
          icon: '/static/image/cha.png',
          description: '报警电话',
          number: '110',
        },
        {
          icon: '/static/image/huo.png',
          description: '火灾电话',
          number: '119',
        },
        {
          icon: '/static/image/ji.png',
          description: '急救电话',
          number: '120',
        },
        {
          icon: '/static/image/zhan.png',
          description: '消防站',
          number: '',
        },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/static/image/${imageName}`;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    startAutoplay() {
      this.interval = setInterval(this.nextImage, 3000);
    },
    stopAutoplay() {
      clearInterval(this.interval);
    },
    nextAnnouncement() {
      this.announcementIndex = (this.announcementIndex + 1) % this.announcements.length;
    },
    startAnnouncementScroll() {
      this.announcementInterval = setInterval(this.nextAnnouncement, 3000);
    },
    stopAnnouncementScroll() {
      clearInterval(this.announcementInterval);
    },
  },
  mounted() {
    this.startAutoplay();
    this.startAnnouncementScroll();
  },
  beforeDestroy() {
    this.stopAutoplay();
    this.stopAnnouncementScroll();
  },
};
</script>