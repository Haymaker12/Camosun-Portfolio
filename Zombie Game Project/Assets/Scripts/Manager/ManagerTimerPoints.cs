using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ManagerTimerPoints : MonoBehaviour
{
    [Header("Points and Timer Settings")]
    public int pointsToAdd = 0; //Points to + or - from final score. 
    public float timeLeft = 60f;
    public bool timerEnabled = true;
    
    // Update is called once per frame
    void Update()
    {
        if (timerEnabled){

            timeLeft -=  Time.deltaTime;
            
            if(timeLeft < 0) 
            { 
                Debug.Log("Out of time");
                timerEnabled = false;
            }
        }
        
    }

}
