import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import styled from "styled-components";
import { BountyAPI } from '../apis/BountyAPI';
import IUser from '../interfaces/IUser';
import { UserAPI } from '../apis/UserAPI';
import PreviewBounty from './PreviewBounty';
import { Route } from 'react-router-dom'
import BlokerreButton from './BlokerreButton';


interface BountySubmitFormProps
{
    invalid?: boolean;
    enabled?: boolean;
}

interface FormErrors
{
    bountyTitle?: string;
    dueDate?: string;
    bountyCategory?: string;
    bountyDetails?: string;
    reward?: string;
    rewardDetails?: string;
    bountyStatus?: string;
    evaluationCriteria?: string;
    usefulLink1?: string;
    usefulLink2?: string;
}

const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`

const StyledLabel = styled.label<BountySubmitFormProps>`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${props => props.invalid ? 'red' : 'black'};
`

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const StyledButton = styled.button<BountySubmitFormProps>`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`

const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`

function BountySubmitForm()
{
    const [user, setUser] = useState<IUser>();
    const [bountyTitle, setBountyTitle] = useState('');
    const [dueDate, setDueDate] = useState<Date>(new Date());
    const [bountyCategory, setBountyCategory] = useState('');
    const [bountyDetails, setBountyDetails] = useState('');
    const [rewardDetails, setRewardDetails] = useState('');
    const [bountyStatus, setBountyStatus] = useState('');
    const [reward, setReward] = useState(0);
    const [evaluationCriteria, setEvaluationCriteria] = useState('');
    const [usefulLink1, setUsefulLink1] = useState('');
    const [usefulLink2, setUsefulLink2] = useState('');
    const [formValid, setFormValid] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isBountyTitleValid, setIsBountyTitleValid] = useState(true);
    const [isDueDateValid, setIsDueDateValid] = useState(true);
    const [isBountyCategoryValid, setIsBountyCategoryValid] = useState(true);
    const [isBountyDetailsValid, setIsBountyDetailsValid] = useState(true);
    const [isRewardValid, setIsRewardValid] = useState(true);
    const [isBountyStatusValid, setIsBountyStatusValid] = useState(true);
    const [isRewardDetailsValid, setIsRewardDetailsValid] = useState(true);
    const [isEvaluationCriteriaValid, setIsEvaluationCriteriaValid] = useState(true);
    const [isUsefulLink1Valid, setIsUsefulLink1Valid] = useState(true);
    const [isUsefulLink2Valid, setIsUsefulLink2Valid] = useState(true);
    const [openPreview, setOpenPreview] = useState<boolean>(false);

    useEffect(() =>
    {
        getUser(76);
    }, []);

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        console.log("Event:");
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        console.log("Name: ", name);
        console.log("Value: ", value);

        if (isFieldValid(name, value))
        {
            setState(name, value);
        }

        validateForm();
    }

    const getUser = (id: number) =>
    {
        UserAPI.getUserById(id).then(response =>
        {
            if (response !== undefined)
            {
                setUser(response);
            }

        });
    }


    const isFieldValid = (name: string, value: any) =>
    {
        let fieldValidationErrors = formErrors;

        let bountyTitleValid = isBountyTitleValid;
        let bountyCategoryValid = isBountyCategoryValid;
        let dueDateValid = isDueDateValid;
        let bountyDetailsValid = isBountyDetailsValid;
        let rewardValid = isRewardValid;
        let bountyStatusValid = isBountyStatusValid;
        let rewardDetailsValid = isRewardDetailsValid;
        let evaluationCriteriaValid = isEvaluationCriteriaValid;
        let usefulLink1Valid = isUsefulLink1Valid;
        let usefulLink2Valid = isUsefulLink2Valid;

        switch (name)
        {
            case 'bountyTitle':
                bountyTitleValid = value.length >= 6;

                bountyTitleValid ?
                    setFormErrors({ bountyTitle: '' }) :
                    setFormErrors({ bountyTitle: 'Bounty Title is too short' });

                setIsBountyTitleValid(bountyTitleValid);

                return bountyTitleValid;
            case 'dueDate':
                //dueDateValid = value.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
                fieldValidationErrors!.dueDate = dueDateValid ? '' : 'is invalid';
                setIsDueDateValid(dueDateValid);
                return dueDateValid;
            case 'bountyCategory':
                bountyCategoryValid = value.length >= 6;
                fieldValidationErrors!.bountyCategory = bountyCategoryValid ? '' : 'is too short';
                setIsBountyCategoryValid(bountyCategoryValid);
                return bountyCategoryValid;
            case 'bountyStatus':
                bountyStatusValid = value.length >= 0;
                fieldValidationErrors!.bountyStatus = bountyStatusValid ? '' : 'is too short';
                setIsBountyStatusValid(bountyStatusValid);
                return bountyStatusValid;
            case 'bountyDetails':
                bountyDetailsValid = value.length >= 6;
                fieldValidationErrors!.bountyDetails = bountyDetailsValid ? '' : 'is too short';
                setIsBountyDetailsValid(bountyDetailsValid);
                return bountyDetailsValid;
            case 'reward':
                rewardValid = value >= 0
                fieldValidationErrors!.reward = rewardValid ? '' : 'invalid amount';
                setIsRewardValid(rewardValid);
                return rewardValid;
            case 'rewardDetail':
                rewardDetailsValid = value.length >= 6
                fieldValidationErrors!.rewardDetails = rewardDetailsValid ? '' : 'is too short';
                setIsRewardDetailsValid(rewardDetailsValid);
                return rewardDetailsValid;
            case 'evaluationCriteria':
                evaluationCriteriaValid = value.length >= 6
                fieldValidationErrors!.evaluationCriteria = evaluationCriteriaValid ? '' : 'is too short';
                setIsEvaluationCriteriaValid(evaluationCriteriaValid);
                return evaluationCriteriaValid;
            case 'usefulLink1':
                usefulLink1Valid = value.length >= 6
                fieldValidationErrors!.usefulLink1 = usefulLink1Valid ? '' : 'is too short';
                setIsUsefulLink1Valid(usefulLink1Valid);
                return usefulLink1Valid;
            case 'usefulLink2':
                usefulLink2Valid = true
                fieldValidationErrors!.usefulLink2 = usefulLink2Valid ? '' : 'is too short';
                setIsUsefulLink2Valid(usefulLink2Valid);
                return usefulLink2Valid;
            default:
                break;
        }

    }
    const setState = (name: string, value: any) =>
    {
        switch (name)
        {
            case 'bountyTitle':
                setBountyTitle(value);
                break;
            case 'dueDate':
                setDueDate(value);
                break;
            case 'bountyCategory':
                setBountyCategory(value);
                break;
            case 'bountyStatus':
                setBountyStatus(value);
                break;
            case 'bountyDetails':
                setBountyDetails(value);
                break;
            case 'reward':
                setReward(value);
                break;
            case 'rewardDetail':
                setRewardDetails(value);
                break;
            case 'evaluationCriteria':
                setEvaluationCriteria(value);
                break;
            case 'usefulLink1':
                setUsefulLink1(value);
                break;
            case 'usefulLink2':
                setUsefulLink2(value);
                break;
            default:
                break;
        }
    }

    const validateForm = () =>
    {
        let isFormValid = (isBountyDetailsValid &&
            bountyDetails &&
            isDueDateValid &&
            isBountyCategoryValid &&
            isBountyDetailsValid &&
            isRewardValid &&
            isRewardDetailsValid &&
            isEvaluationCriteriaValid &&
            isUsefulLink1Valid &&
            isUsefulLink2Valid &&
            isBountyStatusValid) ? true : false;

        setFormValid(isFormValid);
    }

    const createBounty = () =>
    {
        console.log('Called Post Bounty API');
        console.log('is Form Valid?:', formValid);


        if (formValid)
        {
            BountyAPI.postBounty({
                title: bountyTitle,
                description: bountyDetails,
                reward: reward,
                evaluation: evaluationCriteria,
                resources: usefulLink1,
                deadline: dueDate.toUTCString(),
                authorId: 76,
                category: bountyCategory,
                status: bountyStatus,
                assignedUsers: null
            })
                .then((response) =>
                {
                    console.log("Post Bounty Response:");
                    console.log(response);
                });
        }
    }
    const handleSubmit = () =>
    {
        createBounty();
    }

    const previewBounty = (flag: boolean) =>
    {
        setOpenPreview(flag);
    }

    return (
        <>
            <StyledForm>
                <StyledLabel>Bounty Title</StyledLabel>
                <StyledInput type='text'
                    name='bountyTitle'
                    placeholder='Bounty Title'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.bountyTitle}</StyledAlert>}
                <StyledLabel>Due Date</StyledLabel>
                <StyledInput type='text'
                    name='dueDate'
                    placeholder='dd/mm/yyyy'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.dueDate}</StyledAlert>}
                <StyledLabel>Bounty Category</StyledLabel>
                <StyledInput type='text'
                    name='bountyCategory'
                    placeholder='Bounty Category'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.bountyCategory}</StyledAlert>}
                <StyledLabel>Bounty Details</StyledLabel>
                <StyledInput type='text'
                    name='bountyDetails'
                    placeholder='Bounty Details'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.bountyDetails}</StyledAlert>}
                <StyledLabel>Reward</StyledLabel>
                <StyledInput type='text'
                    name='reward'
                    placeholder='Reward'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.rewardDetails}</StyledAlert>}
                <StyledLabel>Reward Details</StyledLabel>
                <StyledInput type='text'
                    name='rewardDetails'
                    placeholder='Reward Details'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.rewardDetails}</StyledAlert>}
                <StyledLabel>Bounty Status</StyledLabel>
                <StyledInput type='text'
                    name='bountyStatus'
                    placeholder='Bounty Status'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.bountyStatus}</StyledAlert>}
                <StyledLabel>Evaluation Criteria</StyledLabel>
                <StyledInput type='text'
                    name='evaluationCriteria'
                    placeholder='Bounty Evaluation Criteria'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.evaluationCriteria}</StyledAlert>}
                <StyledLabel>Useful Link 1</StyledLabel>
                <StyledInput type='text'
                    name='usefulLink1'
                    placeholder='Useful Link 1'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.usefulLink1}</StyledAlert>}
                <StyledLabel>Useful Link 2</StyledLabel>
                <StyledInput type='text'
                    name='usefulLink2'
                    placeholder='Useful Link 2'
                    onChange={e => handleUserInput(e)} />
                {!isBountyTitleValid && <StyledAlert>{formErrors.usefulLink2}</StyledAlert>}
                <StyledButton type='submit' disabled={!formValid} onClick={handleSubmit}>Submit</StyledButton>
                <StyledButton type='button' disabled={!formValid} onClick={() => previewBounty(true)}>Preview</StyledButton>
                {openPreview &&
                    <PreviewBounty previewBounty={previewBounty}
                        title={bountyTitle}
                        description={bountyDetails}
                        reward={reward}
                        evaluation={evaluationCriteria}
                        resources={usefulLink1}
                        deadline={dueDate}
                        category={bountyCategory}
                        status={bountyStatus}>
                        <>
                            <BlokerreButton onClick={handleSubmit}>Submit</BlokerreButton>
                            <BlokerreButton color='secondary' onClick={() => previewBounty(false)}>Cancel</BlokerreButton>
                            <BlokerreButton color='info' onClick={() => { }}>Add to List</BlokerreButton>
                        </>
                    </ PreviewBounty>}
            </StyledForm>
            <div>

            </div>

            <div>
                {formErrors.bountyTitle}
            </div>
        </>

    )
}

export default BountySubmitForm;