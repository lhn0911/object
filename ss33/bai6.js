class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

const jobs = [];

while (true) {
    const choice = prompt("Chọn một tùy chọn:\n1. Thêm công việc\n2. Hiển thị danh sách công việc\n3. Tìm kiếm công việc theo ID\n4. Thoát");

    switch (choice) {
        case '1':
            const id = prompt("Nhập ID công việc:");
            const title = prompt("Nhập tiêu đề công việc:");
            const description = prompt("Nhập mô tả công việc:");
            const completed = prompt("Công việc đã hoàn thành? (true/false)");

            const newJob = new Job(id, title, description, JSON.parse(completed));
            jobs.push(newJob);
            console.log("Công việc được thêm thành công.");
            break;

        case '2':
            if (jobs.length === 0) {
                console.log("Không có công việc nào.");
            } else {
                console.log("Danh sách Công việc:");
                jobs.forEach(job => {
                    console.log(`ID: ${job.id}, Tiêu đề: ${job.title}, Mô tả: ${job.description}, Hoàn thành: ${job.completed}`);
                });
            }
            break;

        case '3':
            const searchId = prompt("Nhập ID công việc để tìm kiếm:");
            const foundJob = jobs.find(job => job.id === searchId);

            if (foundJob) {
                console.log("Công việc được tìm thấy:");
                console.log(`ID: ${foundJob.id}, Tiêu đề: ${foundJob.title}, Mô tả: ${foundJob.description}, Hoàn thành: ${foundJob.completed}`);
            } else {
                console.log("Không tìm thấy công việc.");
            }
            break;

        case '4':
            console.log("Đang thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }

    if (choice === '4') {
        break;
    }
}
