<template>
  <CContainer fluid>
    <div class="task-board">
      <div class="columns">
        <div v-for="(column, index) in columns" :key="index" class="column">
          <div class="column-header">
            <h5 class="column-title">
              {{ column.title }}
              <span class="text-secondary h6">({{ column.tasks.length }})</span>
            </h5>
            <img
              src="@/assets/icons/add_task.svg"
              alt="add_task"
              style="margin-top: -5px"
            />
          </div>
          <CCard
            v-for="(task, idx) in column.tasks"
            :key="idx"
            class="task-card"
          >
            <CCardBody>
              <div style="padding: 15px">
                <h6 class="task-title">{{ task.title }}</h6>
                <p class="task-description">{{ task.description }}</p>
                <div class="task-footer">
                  <div class="task-meta">
                    <span class="d-flex align-items-center">
                      <img
                        width="14"
                        src="@/assets/icons/clock.svg"
                        alt="clock"
                        style="margin-right: 5px"
                      />
                      {{ task.creationDate }}
                    </span>
                  </div>
                  <div class="executors">
                    <CAvatar
                      v-for="avatar in task.executors"
                      :key="avatar"
                      :src="avatar"
                      size="sm"
                      class="me-1"
                    />
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
          <div class="d-flex justify-content-center">
            <CButton class="d-flex" variant="outline">
              <img
                src="@/assets/icons/add_task.svg"
                alt="add_task"
                style="margin-right: 5px"
              />
              <span style="color: #4e4e67; font-weight: 500; font-size: 14px"
                >Add Card</span
              >
            </CButton>
          </div>
        </div>
        <div class="column" style="width: 180px; padding: 10px">
          <div class="d-flex justify-content-center">
            <CButton class="d-flex" variant="outline">
              <img
                src="@/assets/icons/add_column.svg"
                alt="add_column"
                style="margin-right: 5px"
              />
              <span style="color: #4e4e67; font-weight: 500; font-size: 14px"
                >Add Column</span
              >
            </CButton>
          </div>
        </div>
      </div>
    </div>
  </CContainer>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Unassigned',
          tasks: [
            {
              title: 'Netflix COM 1',
              description:
                'Повседневная практика показывает, что перспективное планирование обеспечивает широ...',
              creationDate: 'Apr 12, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
            {
              title: 'Walmart Tlalpa Mexico DF 000000',
              description:
                'Повседневная практика показывает, что перспективное планирование обеспечивает широкому кругу.',
              creationDate: 'Apr 12, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
            {
              title: 'Disp ATM Propio',
              description:
                'Повседневная практика показывает, что перспективное планирование обеспечивает широкому кругу.',
              creationDate: 'Apr 12, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
          ],
        },
        {
          title: 'In Progress',
          tasks: [
            {
              title: 'Task 1',
              description: 'This is a task in progress.',
              creationDate: 'Apr 14, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
            {
              title: 'Task 2',
              description: 'This is another task in progress.',
              creationDate: 'Apr 15, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
          ],
        },
        {
          title: 'Completed',
          tasks: [
            {
              title: 'Completed Task 1',
              description: 'This task is completed.',
              creationDate: 'Apr 10, 24',
              executors: ['https://via.placeholder.com/50'],
            },
            {
              title: 'Completed Task 2',
              description: 'This is another completed task.',
              creationDate: 'Apr 11, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
          ],
        },
        {
          title: 'Archived',
          tasks: [
            {
              title: 'Archived Task 1',
              description: 'This task is archived.',
              creationDate: 'Apr 5, 24',
              executors: [
                'https://via.placeholder.com/50',
                'https://via.placeholder.com/50',
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.task-board {
  display: flex;
  overflow-x: auto;
}

.columns {
  display: flex;
  gap: 1rem;
}

.column {
  width: 360px;
  height: max-content;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
}

.column-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.column-title {
  font-size: 1rem;
  font-weight: 600;
  color: #000;
}

.task-card {
  margin-bottom: 10px;
  width: 344px;
  margin-left: -12px;
  background: #f7f8fc;
  border: none;
}

.card-body {
  padding: 0;
}

.task-title {
  font-size: 16px;
  font-weight: 600;
  color: #3f24e8;
  margin-bottom: 5px;
}

.task-description {
  font-size: 12px;
  color: #6c757d;
  margin-bottom: 10px;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.executors {
  display: flex;
}

.task-meta {
  display: flex;
  align-items: center;
  font-size: 12px;
}
</style>
