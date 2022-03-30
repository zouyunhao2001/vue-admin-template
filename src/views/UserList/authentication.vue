<template>
    <div style="margin: 50px 50px 0 50px">
        <el-form :inline="true">
            <el-form-item label="用户">
                <el-input v-model.trim="phone" style="width: 240px" size="medium  " placeholder="请输入用户手机号/邮箱/真实姓名">
                </el-input>
            </el-form-item>
            <el-form-item style="margin-left: 20px">
                <el-button type="primary" style="width: 100px" @click="screen">筛选</el-button>
            </el-form-item>
        </el-form>
        <el-radio-group v-model="tabPosition" style="margin: 30px 0" @change="handleClick">
            <el-radio-button label="top">全部</el-radio-button>
            <el-radio-button label="right">待审批</el-radio-button>
            <el-radio-button label="bottom">已通过</el-radio-button>
            <el-radio-button label="left">已驳回</el-radio-button>
        </el-radio-group>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="ID" width="60" align="center">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="60" align="center">
            </el-table-column>
            <el-table-column prop="address" label="手机号" width="80" align="center">
            </el-table-column>
            <el-table-column prop="address" label="邮箱" width="80" align="center">
            </el-table-column>
            <el-table-column prop="address" label="真实姓名" align="center">
            </el-table-column>
            <el-table-column prop="address" label="证件类型" align="center">
            </el-table-column>
            <el-table-column prop="address" label="证件号码" align="center">
            </el-table-column>
            <el-table-column label="认证图片" align="center" width="200">
                <template slot-scope="scope">
                    <el-image v-for="(item,index) in scope.row.srcList" :key="index"
                        style="width: 75px; height: 50px;margin-left: 10px;" :src="item"
                        :preview-src-list="scope.row.srcList">
                    </el-image>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="提交审核时间" align="center">
            </el-table-column>
            <el-table-column prop="address" label="状态" align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" align="center" width="200">
                <template slot-scope="scope">
                    <el-button @click="seeClick(scope.row,1)" type="text" size="small">审核通过</el-button>
                    <el-button type="text" size="small" @click="seeClick(scope.row,0)">驳回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block" style="display: flex;
        justify-content: right;margin-top: 30px;">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[10, 15, 20, 25]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
        <el-dialog :title="elTitle" class="elTitle" :visible.sync="dialogVisible" width="30%" center>
            <span style="color: red;font-weight: bold;">{{elTitleES}}</span>
            <div style="line-height: 25px;margin-top: 20px;">
                <div><span style="color: black;font-weight: bold;">用户名：</span>{{rowList.name}}</div>
                <div><span style="color: black;font-weight: bold;">手机号：</span>{{rowList.name}}</div>
                <div><span style="color: black;font-weight: bold;">邮箱：</span>{{rowList.name}}</div>
                <div><span style="color: black;font-weight: bold;">真实项目：</span>{{rowList.name}}</div>
                <div><span style="color: black;font-weight: bold;">证件类型：</span>{{rowList.name}}</div>
                <div><span style="color: black;font-weight: bold;">证件号码：</span>{{rowList.name}}</div>
                <div><span style="color: black;font-weight: bold;">证件照片：</span></div>
                <el-image v-for="(item,index) in rowList.srcList" :key="index"
                    style="width: 120px; height: 70px;margin-right: 10px;margin-top: 10px;" :src="item"
                    :preview-src-list="rowList.srcList">
                </el-image>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" style="width: 150px">取 消</el-button>
                <el-button type="primary" @click="confirm" style="width: 150px">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "VueAdminTemplateAuthentication",

        data() {
            return {
                rowList: '',
                elTitle: '确认通过实名认证',
                elTitleES: '确认审核通过以下用户的实名认证信息吗？',
                dialogVisible: false,
                phone: "",
                tabPosition: "top",
                imgFileList: "",
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 1,
                HideId: 1,
                tableData: [
                    {
                        date: "2016-05-02",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1517 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1519 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄",
                        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        srcList: [
                            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        ],
                    },

                ],
            };
        },

        mounted() { },

        methods: {
            // 点击筛选信息
            screen() {
                if (this.phone == "") {
                    this.$message.error("请输入查询条件");
                    return;
                }
                console.log(this.phone);
            },
            // 查看信息
            seeClick(value, id) {
                this.HideId = id
                if (id == 0) {
                    this.elTitle = '确认驳回实名认证'
                    this.elTitleES = '确认驳回以下用户的实名认证信息吗？'
                }
                this.rowList = value
                this.dialogVisible = true
            },
            // 点击切换标签
            handleClick() {
                console.log(this.tabPosition);
            },
            // 每页条数
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            //   当前页面
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            // 确认审批
            confirm() {
                if (this.HideId == 1) {
                    console.log('确认');
                } else {
                    console.log('驳回');
                }
                this.dialogVisible = false
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>