<template>
  <div class="container">
    <div class="search-bar">
      <u-input v-model="searchText" placeholder="搜索..." style="flex-grow: 1;" @input="filterData" />
      <u-button type="primary" shape="circle" icon="plus" style="width: 30%;" @click="addItem" />
    </div>
    <table class="data-table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>姓名</th>
          <th>描述</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredIndexList" :key="index" @click="editItem(item)">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.age }}</td>
          <td>
            <div class="button-group">
              <u-button type="primary" size="mini" @click.stop="editItem(item)">编辑</u-button>
              <u-button type="danger" size="mini" @click.stop="deleteItem(item)">删除</u-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <transition name="fade">
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <div class="popup-header">
            <span>{{ isEditing ? '编辑' : '新增' }}表单</span>
            <u-button type="primary" shape="circle" icon="close" size="mini" @click="cancel" />
          </div>
          <div class="popup-body">
            <div class="popup-field">
              <label>姓名:</label>
              <u-input v-model="form.name" style="width: 70%;" />
            </div>
            <div class="popup-field">
              <label>描述:</label>
              <u-textarea v-model="form.description" style="width: 70%;" />
            </div>
            <div class="popup-field">
              <label>年龄:</label>
              <u-input v-model="form.age" type="number" style="width: 70%;" />
            </div>
          </div>
          <div class="popup-footer">
            <u-button type="primary" @click="save">{{ isEditing ? '更新' : '添加' }}</u-button>
            <u-button type="default" @click="cancel">取消</u-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '', // 搜索框的值
      users: [ // 用户数据列表
        { name: '张三', description: '描述1', age: 25 },
        { name: '李四', description: '描述2', age: 30 }
      ],
      form: {}, // 表单数据
      showPopup: false, // 弹出窗口显示状态
      isEditing: false, // 是否处于编辑状态
    };
  },
  computed: {
    filteredIndexList() {
      if (!this.searchText) {
        return this.users;
      }
      return this.users.filter(user => {
        return Object.values(user).some(value => {
          return String(value).toLowerCase().includes(this.searchText.toLowerCase());
        });
      });
    }
  },
  methods: {
    addItem() {
      this.form = {
        name: '',
        description: '',
        age: ''
      };
      this.isEditing = false;
      this.showPopup = true;
    },
    deleteItem(item) {
      const index = this.users.indexOf(item);
      if (index > -1) {
        this.users.splice(index, 1);
      }
      this.showPopup = false; // 关闭弹窗
    },
    editItem(item) {
      this.form = Object.assign({}, item);
      this.isEditing = true;
      this.showPopup = true;
    },
    save() {
      if (this.form.name && this.form.description && this.form.age) {
        if (this.isEditing) {
          // 更新用户信息
          const index = this.users.findIndex(u => u.name === this.form.name);
          this.users.splice(index, 1, this.form);
        } else {
          // 新增用户信息
          this.users.push(this.form);
        }
        this.form = {};
        this.showPopup = false;
      }
    },
    cancel() {
      this.form = {};
      this.showPopup = false;
    },
    filterData(event) {
      this.searchText = event.detail.value;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

/* 调整搜索框和新增按钮的宽度 */
.search-bar .u-input {
  width: 70%;
}
.search-bar .u-button {
  width: 30%;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.data-table thead th {
  background-color: #f2f2f2;
}

.button-group {
  display: flex;
  gap: 5px; /* 添加间隔 */
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: calc(100% - 40px); /* 调整宽度以适应屏幕 */
  max-width: 600px; /* 设置最大宽度 */
}

.popup-content {
  width: 100%;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.popup-body {
  margin-bottom: 10px;
}

.popup-field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.popup-field label {
  width: 30%; /* 设定标签宽度 */
  text-align: right;
  padding-right: 10px;
}

.popup-field .u-input, .popup-field .u-textarea {
  width: 70%; /* 输入框占据剩余空间 */
}

.popup-footer {
  display: flex;
  justify-content: flex-end;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>