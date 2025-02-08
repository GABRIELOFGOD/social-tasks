"use client";

import BigButton from '@/components/common/buttons/BigButton';
import ActionInput from '@/components/common/inputs/ActionInput';
import SelectInput from '@/components/common/inputs/SelectInput';
import { useGlobalContext } from '@/context/GlobalContext';
import { taskTypes } from '@/data/tasks';
import { useAddTask } from '@/hooks/useAddTask';
import { TaskType } from '@/model/tasksTypes';
import React, { useState } from 'react';

const AddTaskModal = ({closeModal}: {closeModal: () => void}) => {
  const [taskType, setTaskType] = useState<TaskType>(TaskType.TELEGRAM);
  const [taskAction, setTaskAction] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [taskPoints, setTaskPoints] = useState<number>(0);
  const [taskUsername, setTaskUsername] = useState<string>('');
  const [taskUrl, setTaskUrl] = useState<string>('');
  const [mandatoryTask, setMandatoryTask] = useState<boolean>(false);

  const selectedTaskType = taskTypes.find((type) => type.name === taskType);

  const { user } = useGlobalContext();

  const { addTask, state } = useAddTask();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(taskType, taskAction, taskDescription, taskPoints, taskUsername, taskUrl);
    
    if (!taskType || !taskAction || !taskDescription || !taskPoints || !taskUsername || !taskUrl) {
      state.error = 'Please fill all fields';
    }
    
    await addTask({
      taskType,
      taskAction: taskAction,
      taskDescription,
      taskPoints,
      taskUsername,
      taskUrl,
      mandatoryTask,
      wallet: user?.wallet || '',
    });
  };

  const setTaskValue = (value: TaskType) => {
    setTaskType(value);
    setTaskAction("");
  }

  return (
    <div
      className='bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center'
    >
      <div className='rounded-lg p-3 md:p-5 w-[700px] bg-tertiary h-fit'>
        <div className='flex justify-between items-center'>
          <h1 className='text-black text-2xl font-bold '>Create Task</h1>
          <button onClick={closeModal} className='text-black text-2xl font-bold hover:text-white'>&times;</button>
        </div>
        {state.error && <p className='text-center text-red-500 text-sm'>{state.error}</p>}
        <form
          className='flex flex-col gap-5 mt-5 bg-black p-2 md:p-5 rounded-lg text-white'
          onSubmit={handleFormSubmit}
        >
          <div className="flex gap-5 flex-col md:flex-row w-full">
            <div className='flex flex-col gap-3 w-full'>
              <p className='font-semibold text-lg'>Task Type:</p>
              <SelectInput
                options={taskTypes.map((type) => ({ value: type.name, label: type.name }))}
                onChange={(value) => setTaskValue(value as TaskType)}
                className='h-12 bg-black'
              />
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <p className='font-semibold text-lg'>Task Action:</p>
              <SelectInput
                options={selectedTaskType ? selectedTaskType.actions.map((action) => ({ value: action, label: action })) : []}
                onChange={(value) => setTaskAction(value)}
                className='h-12 bg-black'
                disabled={!selectedTaskType}
              />
            </div>
          </div>

          <div className='flex flex-col gap-3 w-full'>
            <p className='font-semibold text-lg'>Task Description:</p>
            <ActionInput
              placeholder={`Follow ${taskType}`}
              value={taskDescription}
              setValue={setTaskDescription}
              type='text'
              disabled={!taskType}
              className='h-12 bg-black'
            />
          </div>

          <div className="flex gap-5 flex-col md:flex-row w-full">
            <div className='flex flex-col gap-3 w-full'>
              <p className='font-semibold text-lg'>Task Points:</p>
              <ActionInput
                placeholder='Points'
                value={taskPoints.toString()}
                setValue={(value) => setTaskPoints(parseInt(value))}
                type='number'
                className='h-12 bg-black'
              />
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <p className='font-semibold text-lg capitalize'>{taskType} username:</p>
              <ActionInput
                placeholder={`${taskType} username`}
                value={taskUsername}
                setValue={setTaskUsername}
                type='text'
                className='h-12 bg-black'
              />
            </div>
          </div>
          
          <div className='flex flex-col gap-3 w-full'>
            <p className='font-semibold text-lg'>Task Url:</p>
            <ActionInput
              placeholder={`Url to ${taskType} task`}
              value={taskUrl}
              setValue={setTaskUrl}
              type='text'
              className='h-12 bg-black'
            />
          </div>

          <div className="flex gap-3 w-full justify-center">
            <input
              type="checkbox"
              id="mandatory"
              name="mandatory"
              checked={mandatoryTask}
              onChange={() => setMandatoryTask(!mandatoryTask)}
            />
            <label htmlFor="mandatory" className="ml-2 text-primary">Mandatory Task?</label>
          </div>

          <BigButton
            text={state.loading ? 'Loading...' : 'Add Task'}
            className={`bg-primary text-black py-3 px-6 hover:bg-secondary duration-200 ${state.loading ? 'cursor-not-allowed bg-opacity-50' : ''}`}
            disabled={state.loading}
          />
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;