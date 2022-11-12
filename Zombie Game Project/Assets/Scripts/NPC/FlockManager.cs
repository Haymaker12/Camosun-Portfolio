using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlockManager : MonoBehaviour
{
    public GameObject boidPrefab;   //Prefab object
    UnityEngine.AI.NavMeshAgent agent;

    public int numBOids = 5;
    public GameObject[] allBoids;  //Array that contains all boids
    Vector3 boidLimits = new Vector3(15.0f, 2f, 15.0f); //Maximum initial seperation of boids

    public Vector3 flockBoundary = new Vector3(15.0f, 2f, 15.0f);

    public GameObject timerObj;

    [Header("Zombie Settings")]
    [Range(0.0f, 5.0f)]
    public float minSpeed;
    [Range(0.0f, 5.0f)]
    public float maxSpeed;
    [Range(1.0f, 10.0f)]
    public float neighbourDistance;
    [Range(0.1f, 2.0f)]
    public float neighbourCollision;
    [Range(0.0f, 5.0f)]
    public float rotationSpeed;

    private bool isAttacking;

    [Header("Object References")]
    public GameObject player;
    public GameObject whisperer;
    public GameObject cam;

    [Header("Sensor Range Values")]
    public int gunDetectionRange = 15;
    public int baseDetectionRange = 10;
    public int attackRange = 5;

    [Header("waypoints")]
    public GameObject[] waypoints = new GameObject[4];
    int reachedWaypoint = 0;


    enum State { wander, goToPlayer, goToWhisperer, attackPlayer, attackWhisperer };
    State currentState;
    //END OF VARIABLES


    /*Displays the boundary box
    void OnDrawGizmos()
    {
        Gizmos.color = new Color (1,0,0,0.5f);
        Gizmos.DrawCube(this.transform.position, boidLimits);
    }
    */
    void Awake()
    {
        currentState = State.wander;
    }

    // Start is called before the first frame update
    void Start()
    {
        agent = GetComponent<UnityEngine.AI.NavMeshAgent>();
        allBoids = new GameObject[numBOids];
        for (int i = 0; i < numBOids; i++)
        {
            Vector3 pos = this.transform.position +
                new Vector3(Random.Range(-boidLimits.x, boidLimits.x),
                            1,
                            Random.Range(-boidLimits.z, boidLimits.z));
            allBoids[i] = (GameObject)Instantiate(boidPrefab, pos, Quaternion.identity);

            //Injects the FlockManager to all individual Flock objects
            allBoids[i].GetComponent<Flock>().myManager = this;
        }
    }

    // Update is called once per frame
    void Update()
    {

        foreach (GameObject zombie in allBoids)
        {
            if (zombie != null)
            {
                if (zombie.GetComponent<Flock>().health < 1)
                {
                    Object.Destroy(zombie);
                }
            }
        }

        if (whisperer != null)
        {
            UpdateStateWithWhisperer();
        }
        else
        {
            UpdateState();
        }
    }



    /*
    else if (DistanceBetweenObj(player) < gunDetectionRange && health > 1.0f && shotsFired)     Needs a boolean shotsFired on the player script
    {
        currentState = State.goToPlayer;
        Debug.Log(currentState);
    }
    */

    //MAIN FSM


    void GoToWaypoint(GameObject[] waypoints)
    {
        Vector3 waypointPos = new Vector3(waypoints[reachedWaypoint].transform.position.x, 2, waypoints[reachedWaypoint].transform.position.z);
        switch (reachedWaypoint)
        {
            case 0:
                agent.SetDestination(waypointPos);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint++;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

            case 1:
                agent.SetDestination(waypointPos);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint++;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

            case 2:
                agent.SetDestination(waypointPos);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint++;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

            case 3:
                agent.SetDestination(waypointPos);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint = 0;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

        }
    }

    //Tools Function
    void GoToObj(GameObject targetObj)
    {
        Vector3 toObj = targetObj.transform.position - this.transform.position;
        this.transform.LookAt(toObj);
        agent.SetDestination(targetObj.transform.position);
    }

    void AwayFromObj(GameObject targetObj)
    {
        Vector3 toObj = targetObj.transform.position - this.transform.position;
        Vector3 awayObj = toObj.normalized * -10f;
        this.transform.LookAt(awayObj);
        agent.SetDestination(awayObj);
    }

    float DistanceBetweenObj(GameObject targetObj)
    {
        return Vector3.Distance(targetObj.transform.position, this.transform.position);
    }

    bool Randomness(int chances)
    {
        return (Random.Range(0, 101) < chances);
    }

    IEnumerator AttackPlayer()
    {
        GoToObj(player);

        if (DistanceBetweenObj(player) <= 3)
        {
            int playerHealth = player.GetComponent<PlayerStats>().health;
            isAttacking = true;
            yield return new WaitForSeconds(1);
            isAttacking = false;

            if (Random.Range(0, 100) < 50)
            {
                DecreaseScore();
                switch (playerHealth)
                {
                    case 5:
                        player.GetComponent<PlayerStats>().health = 4;
                        break;

                    case 4:
                        player.GetComponent<PlayerStats>().health = 3;
                        break;

                    case 3:
                        player.GetComponent<PlayerStats>().health = 2;
                        break;

                    case 2:
                        player.GetComponent<PlayerStats>().health = 1;
                        break;

                    case 1:
                        player.GetComponent<PlayerStats>().health = 0;
                        break;
                }
            }
        }
    }

    void AttackWhisperer()
    {
        if (DistanceBetweenObj(whisperer) <= 2)
        {
            if (Randomness(50))
            {
                Debug.Log("Destroy whisperer!");
                Destroy(whisperer);
            }
        }
    }

    public void CheckBoids()
    {
        foreach (GameObject zombie in allBoids)
        {
            if (DistanceBetweenObj(whisperer) < 1)
            {
                Destroy(whisperer);
            }
        }
    }

    void UpdateStateWithWhisperer()
    {
        if (whisperer.GetComponent<WhispererScript>().health == 1 && DistanceBetweenObj(whisperer) < attackRange)
        {
            currentState = State.attackWhisperer;
            Debug.Log(currentState);
        }
        else if (DistanceBetweenObj(player) < attackRange)
        {
            currentState = State.attackPlayer;
            Debug.Log(currentState);
        }
        else if (whisperer.GetComponent<WhispererScript>().health == 1 && DistanceBetweenObj(whisperer) < baseDetectionRange)
        {
            currentState = State.goToWhisperer;
        }
        else if (DistanceBetweenObj(player) < baseDetectionRange)
            Debug.Log(currentState);
            switch (currentState)
            {
                
                case State.wander:
                    GoToWaypoint(waypoints);
                    break;

                case State.goToPlayer:
                    GoToObj(player);
                    break;

                case State.goToWhisperer:
                    GoToObj(whisperer);
                    break;

                case State.attackPlayer:
                if (!isAttacking)
                {
                    StartCoroutine(AttackPlayer());
                }
                    break;

                case State.attackWhisperer:
                    AttackWhisperer();
                    break;
            }
    }

    void UpdateState()
    {
        if (DistanceBetweenObj(player) < attackRange)
        {
            currentState = State.attackPlayer;
            Debug.Log(currentState);
        }
        else if (DistanceBetweenObj(player) < baseDetectionRange)
        {

            switch (currentState)
            {
                case State.wander:
                    GoToWaypoint(waypoints);
                    break;

                case State.goToPlayer:
                    GoToObj(player);
                    break;

                case State.goToWhisperer:
                    GoToObj(whisperer);
                    break;

                case State.attackPlayer:
                    StartCoroutine(AttackPlayer());
                    break;

                case State.attackWhisperer:
                    AttackWhisperer();
                    break;
            }
        }
    }
    void DecreaseScore()
    {
        timerObj.gameObject.GetComponent<ManagerTimerPoints>().pointsToAdd -= 2;
    }
}

