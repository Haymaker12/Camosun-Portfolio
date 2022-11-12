using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class hudManager : MonoBehaviour
{
    //player game object 
    public GameObject playerObj;
    public GameObject timerObj;

    //Hud Elements 
    public Text healthText;
    public Text pointsText;
    public Text ammoText;
    public Text timeText;
    PlayerStats stat;
    ManagerTimerPoints statTime;

    //Pause Menus
    private bool gameIsPaused;
    private bool gameIsOver;
    public GameObject gameEnd;
    public GameObject gameOver;
    public GameObject gamePause;
    public Text reason;
    public Text result;
    public GameObject endObj;
    ExitCollide theEnd;

    public GameObject gc;

    // Start is called before the first frame update
    void Start()
    {
        stat = playerObj.GetComponent<PlayerStats>();
        statTime = timerObj.GetComponent<ManagerTimerPoints>();
        theEnd = endObj.GetComponent<ExitCollide>();
        Resume();
    }

    // Update is called once per frame
    void Update()
    {
        //Every frame, update hud
        healthText.text = "Health: " + stat.health;
        ammoText.text = "Ammo: " + stat.ammo;

        pointsText.text = "Points: " + statTime.pointsToAdd;
        timeText.text = "Time: " + statTime.timeLeft;
        
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (!gameIsOver)
            {
                if (gameIsPaused)
                {
                    Resume();
                }
                else
                {
                    Pause();
                }
            }
            
        }
        
        if (stat.health <= 0 || statTime.timeLeft < 0)
        {
            Cursor.lockState = CursorLockMode.None;
            Time.timeScale = 0f;
            gameIsOver = true;
            Lose();
        }

        if (theEnd.won)
        {
            Cursor.lockState = CursorLockMode.None;
            result.text = "Your final score is: " + theEnd.finalScore + "!";
            gameEnd.SetActive(true);
            gameIsOver = true;
            Time.timeScale = 0f;
        }
    }

    public void Resume()
    {
        Cursor.lockState = CursorLockMode.Locked;
        gamePause.SetActive(false);
        Time.timeScale = 1f;
        gameIsPaused = false;
        StartCoroutine(AllowFiring());

    }

    void Pause()
    {
        gc.GetComponent<GunController>().canFire = false;
        Cursor.lockState = CursorLockMode.None;
        gamePause.SetActive(true);
        gameIsPaused = true;
        Time.timeScale = 0f;
    }

    public void LoadMenu()
    {
        SceneManager.LoadScene(0);
        gameIsPaused = false;
    }

    public void QuitGame()
    {
        Application.Quit();
    }

    public void Restart()
    {
        Time.timeScale = 1f;
        SceneManager.LoadScene(1);
        gameOver.SetActive(false);
        gameEnd.SetActive(false);
        gameIsPaused = false;
        gameIsOver = false;
    }

    void Lose()
    {
        if(stat.health <= 0)
        {
            reason.text = "You Died!";
            gameOver.SetActive(true);
        }
        else if(statTime.timeLeft < 0)
        {
            reason.text = "Out of Time!";
            gameOver.SetActive(true);
        }
    }

    IEnumerator AllowFiring()
    {
        yield return new WaitForSeconds(0.1f);
        gc.GetComponent<GunController>().canFire = true;
    }
}
