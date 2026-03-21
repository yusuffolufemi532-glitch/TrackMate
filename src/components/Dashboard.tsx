import { useState } from 'react';
import { CheckCircle2, Circle, Menu, Trophy } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { LessonDetail } from './LessonDetail';

interface DashboardProps {
  track: string;
  level: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface Week {
  week: number;
  title: string;
  tasks: Task[];
}

const mockRoadmap: Record<string, Week[]> = {
  web: [
    {
      week: 1,
      title: 'HTML & CSS Basics',
      tasks: [
        { id: '1', title: 'Learn HTML structure and tags', completed: true },
        { id: '2', title: 'Style with CSS fundamentals', completed: true },
        { id: '3', title: 'Build your first webpage', completed: false },
      ],
    },
    {
      week: 2,
      title: 'JavaScript Fundamentals',
      tasks: [
        { id: '4', title: 'Variables and data types', completed: false },
        { id: '5', title: 'Functions and control flow', completed: false },
        { id: '6', title: 'DOM manipulation basics', completed: false },
      ],
    },
    {
      week: 3,
      title: 'Build Your First Project',
      tasks: [
        { id: '7', title: 'Plan your interactive app', completed: false },
        { id: '8', title: 'Implement core features', completed: false },
        { id: '9', title: 'Deploy and share', completed: false },
      ],
    },
  ],
  mobile: [
    {
      week: 1,
      title: 'Mobile Development Intro',
      tasks: [
        { id: '1', title: 'Setup development environment', completed: true },
        { id: '2', title: 'Learn mobile UI patterns', completed: true },
        { id: '3', title: 'Build a simple screen', completed: false },
      ],
    },
    {
      week: 2,
      title: 'Navigation & State',
      tasks: [
        { id: '4', title: 'Navigation patterns', completed: false },
        { id: '5', title: 'State management basics', completed: false },
        { id: '6', title: 'Handle user input', completed: false },
      ],
    },
    {
      week: 3,
      title: 'First Mobile App',
      tasks: [
        { id: '7', title: 'Design app architecture', completed: false },
        { id: '8', title: 'Build core functionality', completed: false },
        { id: '9', title: 'Test on device', completed: false },
      ],
    },
  ],
  data: [
    {
      week: 1,
      title: 'Python & Data Basics',
      tasks: [
        { id: '1', title: 'Python fundamentals', completed: true },
        { id: '2', title: 'Work with data structures', completed: true },
        { id: '3', title: 'Introduction to NumPy', completed: false },
      ],
    },
    {
      week: 2,
      title: 'Data Analysis',
      tasks: [
        { id: '4', title: 'Pandas for data manipulation', completed: false },
        { id: '5', title: 'Data visualization basics', completed: false },
        { id: '6', title: 'Analyze a real dataset', completed: false },
      ],
    },
    {
      week: 3,
      title: 'First Analysis Project',
      tasks: [
        { id: '7', title: 'Choose and clean dataset', completed: false },
        { id: '8', title: 'Perform analysis', completed: false },
        { id: '9', title: 'Present insights', completed: false },
      ],
    },
  ],
  design: [
    {
      week: 1,
      title: 'Design Principles',
      tasks: [
        { id: '1', title: 'Color theory and typography', completed: true },
        { id: '2', title: 'Layout and composition', completed: true },
        { id: '3', title: 'Create mood boards', completed: false },
      ],
    },
    {
      week: 2,
      title: 'UI Design Tools',
      tasks: [
        { id: '4', title: 'Master design software', completed: false },
        { id: '5', title: 'Component design', completed: false },
        { id: '6', title: 'Design systems basics', completed: false },
      ],
    },
    {
      week: 3,
      title: 'Design Your First App',
      tasks: [
        { id: '7', title: 'User research and personas', completed: false },
        { id: '8', title: 'Wireframes and mockups', completed: false },
        { id: '9', title: 'High-fidelity prototype', completed: false },
      ],
    },
  ],
};

export function Dashboard({ track, level }: DashboardProps) {
  const [roadmap, setRoadmap] = useState<Week[]>(mockRoadmap[track] || mockRoadmap.web);
  const [selectedLesson, setSelectedLesson] = useState<{
    id: string;
    title: string;
    description: string;
  } | null>(null);

  const totalTasks = roadmap.reduce((sum, week) => sum + week.tasks.length, 0);
  const completedTasks = roadmap.reduce(
    (sum, week) => sum + week.tasks.filter((t) => t.completed).length,
    0
  );
  const progress = (completedTasks / totalTasks) * 100;

  const toggleTask = (weekIndex: number, taskId: string) => {
    setRoadmap((prev) =>
      prev.map((week, wIdx) =>
        wIdx === weekIndex
          ? {
              ...week,
              tasks: week.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : week
      )
    );
  };

  const handleSelectLesson = (task: Task) => {
    setSelectedLesson({
      id: task.id,
      title: task.title,
      description: `Master this essential topic to continue your learning journey.`,
    });
  };

  const trackNames: Record<string, string> = {
    web: 'Web Development',
    mobile: 'Mobile Development',
    data: 'Data Science',
    design: 'UI/UX Design',
  };

  if (selectedLesson) {
    return (
      <LessonDetail
        lessonId={selectedLesson.id}
        title={selectedLesson.title}
        description={selectedLesson.description}
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-slate-900">TrackMate</h1>
              <p className="text-sm text-slate-600">
                {trackNames[track]} · {level.charAt(0).toUpperCase() + level.slice(1)}
              </p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 font-medium">Overall Progress</span>
              <span className="text-emerald-600 font-semibold">
                {completedTasks}/{totalTasks} tasks
              </span>
            </div>
            <ProgressBar progress={progress} />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {progress === 100 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8" />
              <div>
                <div className="font-bold text-lg">Congratulations!</div>
                <div className="text-emerald-50 text-sm">You've completed all tasks</div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {roadmap.map((week, weekIndex) => {
            const weekCompleted = week.tasks.every((t) => t.completed);
            const weekProgress =
              (week.tasks.filter((t) => t.completed).length / week.tasks.length) * 100;

            return (
              <div
                key={week.week}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-slate-900">
                      Week {week.week}: {week.title}
                    </h2>
                    {weekCompleted && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    )}
                  </div>
                  <ProgressBar progress={weekProgress} className="h-2" />
                </div>

                <div className="p-4 space-y-3">
                  {week.tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3 group">
                      <button
                        onClick={() => toggleTask(weekIndex, task.id)}
                        className="flex-shrink-0 mt-0.5 hover:opacity-80 transition-opacity"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
                        )}
                      </button>
                      <button
                        onClick={() => handleSelectLesson(task)}
                        className={`flex-1 text-left p-2 rounded-lg hover:bg-slate-50 transition-colors text-sm ${
                          task.completed
                            ? 'text-slate-500 line-through'
                            : 'text-slate-900 font-medium hover:text-emerald-600'
                        }`}
                      >
                        {task.title}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
