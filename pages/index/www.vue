<template>
  <view class="container">
    <!-- 工厂主页 -->
    <text class="page-title">工厂主页</text>

    <!-- Delivery to Home -->
    <view class="delivery-info">
      <text class="delivery-address">你好</text>
      <text class="delivery-location"></text>
      <text class="distance">距离：3.2公里</text>
    </view>

    <!-- 搜索栏 -->
    <input class="search-input" placeholder="搜索" />

    <!-- 主要功能 -->
    <view class="main-functions">
		<navigator url="/pages/customer/CustomerList">
      <view class="function-item" @click="navigateTo('manufacturing')">
        <image src="../../static/zhihui/zhizao.png" mode="aspectFit"></image>
        <text>制造</text>
      </view>
	  </navigator>
      
      <view class="function-item" @click="navigateTo('doubleCarbon')">
        <image src="../../static/zhihui/shaungtan.png" mode="aspectFit"></image>
        <text>双碳</text>
      </view>
      
      <view class="function-item" @click="navigateTo('audit')">
        <image src="../../static/zhihui/shenhe.png" mode="aspectFit"></image>
        <text>审核</text>
      </view>
    </view>

    <!-- 质检 & AI模型 -->
    <view class="additional-functions">
      <view class="function-item" @click="navigateTo('inspection')">
        <image src="path/to/your/inspection-icon.png" mode="aspectFit"></image>
        <text>质检</text>
      </view>
      
      <view class="function-item" @click="navigateTo('aiModel')">
        <image src="path/to/your/ai-model-icon.png" mode="aspectFit"></image>
        <text>AI模型</text>
      </view>
    </view>

  </view>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #343a40;
}

.delivery-info {
  width: 80%;
  background-color: #00bfa5;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

.delivery-address, .delivery-location, .distance {
  color: white;
  text-align: center;
}

.search-input {
  width: 80%;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  padding-left: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.main-functions, .additional-functions {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.function-item {
  width: calc(33% - 20px);
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.function-item:hover {
  transform: scale(1.05);
}

.function-item > image {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
}

.bar-item {
  width: 25%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #343a40;
  font-weight: 500;
}
</style>

<script>
export default {
  data() {
    return {
      yeData: null // 存储从API获取的数据
    };
  },
  methods: {
    navigateTo(pageName) {
      if (pageName === 'ye') {
        // 调用API获取数据
        this.fetchYeData();
      } else {
        uni.navigateTo({
          url: `./${pageName}/${pageName}.wxml`
        });
      }
    },
    async fetchYeData() {
      try {
        const response = await uni.request({
          url: 'https://your-api-endpoint.com/ye',
          method: 'GET'
          // headers: { ... }, // 如果需要的话设置头部信息
          // data: {},           // 如果需要的话设置请求体数据
        });

        // 假设我们得到了一个名为data的对象作为响应
        const { data } = response[1];
        
        if (response[0] === 200) {
          this.yeData = data; // 存储数据
          uni.navigateTo({ // 导航到ye页面
            url: './ye/ye.wxml?yeData=' + encodeURIComponent(JSON.stringify(this.yeData))
          });
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>



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