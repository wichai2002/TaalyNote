
interface IDailyNote {
    title: string;
    todo_list: [string];
    expect_list: [string];
    files: [string] | null;
    createdAt: Date | null;
}

export default IDailyNote